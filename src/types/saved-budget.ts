import type { FormValues } from "../schemas/clientFormSchema";

export interface SavedBudget {
  id: string;
  date: string;
  client: FormValues;
  services: string[];
  total: number;
  web?: { pages: number; languages: number };
}
