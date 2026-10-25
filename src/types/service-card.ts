import type { ServiceId, ServiceType } from "./service";

export interface ServiceCardProps extends ServiceType {
  pages: number;
  languages: number;
  setPages: (pages: number) => void;
  setLanguages: (languages: number) => void;
  setServiceSelect: (id: ServiceId, selected: boolean) => void;
  isWebSelected: boolean;
}
