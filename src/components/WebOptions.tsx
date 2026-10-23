import type { WebOptionsProps } from "@/types/web-options";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const WebOptions = ({
  pages,
  languages,
  //setPages,
  //setLanguages,
}: WebOptionsProps) => {
  return (
    <>
      <div>
        <label>Nombre de pàgines</label>
        <Button
          id="pagesButtonDecrease"
          disabled={pages <= 1}
          aria-label="Reduir el nombre de pàgines"
        >
          <span aria-hidden="true">-</span>
        </Button>

        <Input id="pagesInput" type="number" min="1" step="1" value={pages} />
        <Button
          id="pagesButtonIncrease"
          aria-label="Augmentar el nombre de pàgines"
        >
          <span aria-hidden="true">+</span>
        </Button>
      </div>
      <div>
        <label>Nombre de llenguatge</label>
        <Button
          id="languagesButtonDecrease"
          disabled={pages <= 1}
          aria-label="Reduir el nombre de languages"
        >
          <span aria-hidden="true">-</span>
        </Button>
        <Input
          id="languagesInput"
          type="number"
          min="1"
          step="1"
          value={languages}
        />
        <Button
          id="languageButtonIncrease"
          aria-label="Augmentar el nombre de languages"
        >
          <span aria-hidden="true">+</span>
        </Button>
      </div>
    </>
  );
};

export default WebOptions;
