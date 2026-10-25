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
      <section className="flex flex-col items-end gap-3">
        <div className="flex items-center justify-end gap-3">
          <label
            htmlFor="pagesInput"
            className="font-semibold whitespace-nowrap text-sm"
          >
            Nombre de pàgines
          </label>

          <Button
            variant="outline"
            size="icon"
            className="btn-counter"
            id="pagesButtonDecrease"
            disabled={pages <= 1}
            aria-label="Reduir el nombre de pàgines"
          >
            <span aria-hidden="true">-</span>
          </Button>

          <Input
            className="w-12 text-sm text-center font-semibold"
            id="pagesInput"
            type="number"
            min="1"
            step="1"
            value={pages}
          />

          <Button
            variant="outline"
            size="icon"
            className="btn-counter"
            id="pagesButtonIncrease"
            aria-label="Augmentar el nombre de pàgines"
          >
            <span aria-hidden="true">+</span>
          </Button>
        </div>
        <div className="flex items-center justify-end gap-3">
          <label
            htmlFor="languagesInput"
            className="font-semibold whitespace-nowrap text-sm"
          >
            Nombre de llenguatge
          </label>

          <Button
            variant="outline"
            size="icon"
            className="btn-counter"
            id="languagesButtonDecrease"
            disabled={languages <= 1}
            aria-label="Reduir el nombre de languages"
          >
            <span aria-hidden="true">-</span>
          </Button>

          <Input
            className="w-12 text-center font-semibold"
            id="languagesInput"
            type="number"
            min="1"
            step="1"
            value={languages}
          />

          <Button
            variant="outline"
            size="icon"
            className="btn-counter"
            id="languageButtonIncrease"
            aria-label="Augmentar el nombre de languages"
          >
            <span aria-hidden="true">+</span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default WebOptions;
