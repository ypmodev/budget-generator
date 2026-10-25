import WebOptions from "@/components/WebOptions";
import type { ServiceCardProps } from "@/types/service-card";

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
  basePrice,
  pages,
  languages,
  setPages,
  setLanguages,
}: ServiceCardProps) => {
  return (
    <Card className="rounded-2xl border-0 bg-white shadow-[0_3px_8px_rgba(0,0,0,0.16)]">
      {" "}
      <CardContent className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 p-6">
        {" "}
        <div className="min-w-0 ">
          <CardTitle className="text-2xl font-extrabold text-black">
            {" "}
            {title}
          </CardTitle>

          <CardDescription className="text-sm font-semibold leading-tight text-neutral-800">
            {" "}
            {description}
          </CardDescription>
        </div>
        <div className="translate-x-18 text-center text-4xl font-extrabold whitespace-nowrap">
          <p>{basePrice} €</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          {" "}
          <Checkbox
            id={id}
            className="data-checked:bg-[#58af8c] data-checked:border-[#58af8c]"
          />
          <label htmlFor={id} className="font-semibold cursor-pointer text-sm">
            Afegir
          </label>
        </div>
        <div className="col-span-3 flex justify-end">
          {" "}
          {id === "web" && (
            <WebOptions
              pages={pages}
              languages={languages}
              setPages={setPages}
              setLanguages={setLanguages}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
