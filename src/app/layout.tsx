import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Carne Shop | لحم فاخر وقطع طازجة",
  description:
    "لحم فاخر وقطع طازجة وحلول مصممة لاحتياجاتك — أفكار إبداعية لأشخاص أذكياء. Premium meat, fresh cuts and creative ideas for smart people.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-theme="rust"
      data-mode="light"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
