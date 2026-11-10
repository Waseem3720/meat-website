"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ThemeId = "rust" | "copper" | "olive" | "ocean";
export type ColorMode = "light" | "dark";

type ThemeContextValue = {
  theme: ThemeId;
  mode: ColorMode;
  setTheme: (theme: ThemeId) => void;
  setMode: (mode: ColorMode) => void;
  toggleMode: () => void;
};

const STORAGE_KEY = "carne-shop-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStored(): { theme: ThemeId; mode: ColorMode } {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<{
        theme: ThemeId;
        mode: ColorMode;
      }>;
      const themes: ThemeId[] = ["rust", "copper", "olive", "ocean"];
      return {
        theme: themes.includes(parsed.theme as ThemeId)
          ? (parsed.theme as ThemeId)
          : "rust",
        mode: parsed.mode === "dark" ? "dark" : "light",
      };
    }
  } catch {
    // Ignore unreadable storage and fall back to the default palette.
  }
  return { theme: "rust", mode: "light" };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>("rust");
  const [mode, setModeState] = useState<ColorMode>("light");

  // Restore the visitor's choice once we are on the client.
  useEffect(() => {
    const stored = readStored();
    setThemeState(stored.theme);
    setModeState(stored.mode);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.mode = mode;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, mode }));
    } catch {
      // Private mode: the choice simply will not persist.
    }
  }, [theme, mode]);

  const setTheme = useCallback((next: ThemeId) => setThemeState(next), []);
  const setMode = useCallback((next: ColorMode) => setModeState(next), []);
  const toggleMode = useCallback(
    () => setModeState((current) => (current === "light" ? "dark" : "light")),
    [],
  );

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, mode, setTheme, setMode, toggleMode }),
    [theme, mode, setTheme, setMode, toggleMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
