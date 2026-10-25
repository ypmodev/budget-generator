export type ServiceId = "seo" | "ads" | "web";

export interface ServiceType {
  id: ServiceId;
  title: string;
  description: string;
  basePrice: number;
  basePagesIncluded?: number;
  baseLanguagesIncluded?: number;
  pricePerExtraPageOrLanguage?: number;
}
