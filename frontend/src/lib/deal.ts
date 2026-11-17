import dealPageData from "@/data/deal-page-data.json";

import type { DealData } from "@/types/deal";

export const deal = dealPageData as DealData;

export function getHeroImage(): string {
  return deal.heroImages?.[0]?.path ?? "/images/placeholder.jpg";
}

export function getPrimaryHotel(): NonNullable<DealData["hotels"]>[number] | undefined {
  return deal.hotels?.[0];
}
