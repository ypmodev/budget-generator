export interface ServiceType {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  basePagesIncluded?: number;
  baseLanguagesIncluded?: number;
  pricePerExtraPageOrLanguage?: number;
}
