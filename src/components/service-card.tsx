import type { ServiceType } from "@/types/service";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const ServiceCard = ({ id, title, description, basePrice }: ServiceType) => {
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
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
