export type ExtraOption = "pages" | "languages";

export interface WebOptionsProps {
  pages: number;
  languages: number;
  setPages: (pages: number) => void;
  setLanguages: (languages: number) => void;
  minPages: number;
  minLanguages: number;
}
