import WebOptions from "@/components/WebOptions";
import type { ServiceCardProps } from "@/types/service-card";
import texts from "@/data/texts.json";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

const ServiceCard = ({
  id,
  title,
  description,
  basePagesIncluded,
  baseLanguagesIncluded,
  basePrice,
  pages,
  languages,
  setPages,
  setLanguages,
  setServiceSelect,
  isSelected,
}: ServiceCardProps) => {
  const selectedClass = isSelected ? "ring-2 ring-[#58af8c]" : "";

  return (
    <Card
      className={`rounded-2xl border-0 bg-white shadow-[0_3px_8px_rgba(0,0,0,0.16)] transition-shadow ${selectedClass}`}
    >
      <CardContent className="grid grid-cols-2 items-center gap-4 p-4 md:grid-cols-3 md:p-6 lg:px-8">
        <div className="col-span-2 min-w-0 md:col-span-1 md:pr-4">
          <CardTitle className="text-xl md:text-2xl lg:text-3xl font-extrabold text-black mb-3">
            {title}
          </CardTitle>
          <CardDescription className="text-sm font-medium leading-tight text-neutral-800">
            {description}
          </CardDescription>
        </div>
        <div className="col-start-1 row-start-2 text-left text-2xl font-extrabold whitespace-nowrap md:col-start-2 md:row-start-1 md:text-center md:text-4xl">
          <p className="text-xl text-left font-extrabold md:translate-x-28 whitespace-nowrap md:text-center md:text-3xl">
            {basePrice} €
          </p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Checkbox
            id={id}
            className="data-checked:bg-[#58af8c] data-checked:border-[#58af8c]"
            checked={isSelected}
            onCheckedChange={(checked) => setServiceSelect(id, checked)}
          />
          <label htmlFor={id} className="cursor-pointer text-sm font-medium">
            {texts.addService}
          </label>
        </div>
        {id === "web" && isSelected && (
          <div className="col-span-2 md:col-span-3 md:flex md:justify-end">
            <WebOptions
              pages={pages}
              languages={languages}
              setPages={setPages}
              setLanguages={setLanguages}
              minPages={basePagesIncluded ?? 1}
              minLanguages={baseLanguagesIncluded ?? 1}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
