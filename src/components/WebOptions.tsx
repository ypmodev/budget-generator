import type { WebOptionsProps } from "@/types/web-options";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import texts from "@/data/texts.json";

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
            {texts.webOptions.pagesLabel}
          </label>

          <Button
            variant="outline"
            size="icon"
            className="btn-counter"
            id="pagesButtonDecrease"
            disabled={pages <= 1}
            aria-label={texts.webOptions.pagesDecrease}
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
            aria-label={texts.webOptions.pagesIncrease}
          >
            <span aria-hidden="true">+</span>
          </Button>
        </div>
        <div className="flex items-center justify-end gap-3">
          <label
            htmlFor="languagesInput"
            className="font-semibold whitespace-nowrap text-sm"
          >
            {texts.webOptions.languagesLabel}
          </label>

          <Button
            variant="outline"
            size="icon"
            className="btn-counter"
            id="languagesButtonDecrease"
            disabled={languages <= 1}
            aria-label={texts.webOptions.languagesDecrease}
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
            aria-label={texts.webOptions.languagesIncrease}
          >
            <span aria-hidden="true">+</span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default WebOptions;
