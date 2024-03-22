import { Libre_Baskerville, Hanken_Grotesk, Outfit } from "next/font/google";

export const libre = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
});

export const hanken_grotesk = Hanken_Grotesk({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "cyrillic-ext", "latin-ext"],
});

export const outfit = Outfit({
  weight: ["500", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});
