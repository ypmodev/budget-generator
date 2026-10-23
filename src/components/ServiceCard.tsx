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
    <Card>
      <CardContent>
        <div>
          <CardTitle> {title} </CardTitle>
          <CardDescription> {description}</CardDescription>
        </div>
        <div>
          <p>{basePrice} €</p>
        </div>
        <div>
          <Checkbox id={id} />
          <label htmlFor={id}>Afegir</label>
        </div>
        <div>
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
