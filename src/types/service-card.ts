import type { ServiceType } from "./service";


export interface ServiceCardProps extends ServiceType {
  pages: number;
  languages: number;
  setPages: (pages: number) => void;
  setLanguages: (languages: number) => void;
}