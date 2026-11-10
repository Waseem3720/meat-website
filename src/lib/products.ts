export const PRODUCT_IMAGES = {
  beef: "/images/cut-beef.jpg",
  mutton: "/images/cut-mutton.jpg",
  kidney: "/images/cut-kidney.jpg",
  liver: "/images/cut-liver.jpg",
} as const;

export type ProductKey = keyof typeof PRODUCT_IMAGES;

export const PRODUCT_ORDER: ProductKey[] = ["beef", "mutton", "kidney", "liver"];
