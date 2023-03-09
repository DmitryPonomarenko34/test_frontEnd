import { Open_Sans, Oswald, Poppins } from "next/font/google";

export const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-opensans",
});

export const oswald = Oswald({
  weight: ["500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const popins = Poppins({
  weight: ["500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-popins",
});
