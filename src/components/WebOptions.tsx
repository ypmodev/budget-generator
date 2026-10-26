import type { WebOptionsProps } from "@/types/web-options";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import texts from "@/data/texts.json";

const WebOptions = ({
  pages,
  languages,
  minPages,
  minLanguages,
  setPages,
  setLanguages,
}: WebOptionsProps) => {
  const decreasePages = () => {
    if (pages > minPages) setPages(pages - 1);
  };
  const increasePages = () => setPages(pages + 1);

  const decreaseLanguages = () => {
    if (languages > minLanguages) setLanguages(languages - 1);
  };
  const increaseLanguages = () => setLanguages(languages + 1);

  return (
    <section className="flex flex-col gap-3 md:items-end">
      <div className="flex items-center justify-between gap-3 md:justify-end">
        <label
          htmlFor="pagesInput"
          className="font-semibold text-sm md:whitespace-nowrap"
        >
          {texts.webOptions.pagesLabel}
        </label>

        <Button
          variant="outline"
          size="icon"
          className="btn-counter"
          id="pagesButtonDecrease"
          disabled={pages <= minPages}
          onClick={decreasePages}
          aria-label={texts.webOptions.pagesDecrease}
        >
          <span aria-hidden="true">-</span>
        </Button>

        <Input
          className="w-12 text-sm text-center font-semibold"
          id="pagesInput"
          type="number"
          min={minPages}
          step="1"
          value={pages}
          readOnly
        />

        <Button
          variant="outline"
          size="icon"
          className="btn-counter"
          id="pagesButtonIncrease"
          onClick={increasePages}
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
          disabled={languages <= minLanguages}
          onClick={decreaseLanguages}
          aria-label={texts.webOptions.languagesDecrease}
        >
          <span aria-hidden="true">-</span>
        </Button>

        <Input
          className="w-12 text-sm text-center font-semibold"
          id="languagesInput"
          type="number"
          min={minLanguages}
          step="1"
          value={languages}
          readOnly
        />

        <Button
          variant="outline"
          size="icon"
          className="btn-counter"
          id="languagesButtonIncrease"
          onClick={increaseLanguages}
          aria-label={texts.webOptions.languagesIncrease}
        >
          <span aria-hidden="true">+</span>
        </Button>
      </div>
    </section>
  );
};

export default WebOptions;
