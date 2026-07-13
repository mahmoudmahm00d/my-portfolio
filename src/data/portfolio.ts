import enData from "./portfolio-en.json";
import arData from "./portfolio-ar.json";
import type { Portfolio } from "@/types/portfolio";

const en = enData as Portfolio;
const ar = arData as Portfolio;

const data: Record<string, Portfolio> = { en, ar };

export function getPortfolio(locale: string): Portfolio {
  return data[locale] || en;
}
