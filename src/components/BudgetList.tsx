import { Card, CardContent } from "@/components/ui/card";
import type { SavedBudget } from "@/types/saved-budget";
import texts from "@/data/texts.json";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { searchBudgets, sortBudgetsByDate } from "@/utils/budgetFilters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { DateOrder } from "@/utils/budgetFilters";

const dateOptions: { value: DateOrder; label: string }[] = [
  { value: "date", label: texts.filters.date },
  { value: "desc", label: texts.filters.newest },
  { value: "asc", label: texts.filters.oldest },
];

const BudgetList = ({ budgets }: { budgets: SavedBudget[] }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [dateOrder, setDateOrder] = useState<DateOrder>("date");
  const filteredBudgets = searchBudgets(budgets, search);
  const sortedBudgets = sortBudgetsByDate(filteredBudgets, dateOrder);

  let selectedLabel = "";
  const selectedOption = dateOptions.find(
    (option) => option.value === dateOrder,
  );
  if (selectedOption) {
    selectedLabel = selectedOption.label;
  }

  const toggleSearch = () => {
    if (showSearch) setSearch("");
    setShowSearch(!showSearch);
  };
  if (budgets.length === 0) {
    return <p className="text-sm font-medium">{texts.history.empty}</p>;
  }

  return (
    <section>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-extrabold text-black md:text-2xl">
          {texts.history.title}
        </h2>

        <div className="flex items-center justify-end gap-5">
          <button
            type="button"
            onClick={toggleSearch}
            aria-label={texts.filters.toggleSearch}
            aria-expanded={showSearch}
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          {showSearch && (
            <Input
              aria-label={texts.filters.search}
              placeholder={texts.filters.search}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-64"
            />
          )}
          <Select
            value={dateOrder}
            onValueChange={(value) => value && setDateOrder(value as DateOrder)}
          >
            <SelectTrigger className="w-auto border-0 shadow-none focus:ring-0">
              <SelectValue>{selectedLabel}</SelectValue>
            </SelectTrigger>

            <SelectContent>
              {dateOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            type="button"
            className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-black"
          >
            {texts.filters.import} <span aria-hidden="true">⌄</span>
          </button>
          <button
            type="button"
            className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-black"
          >
            {texts.filters.name}
          </button>
        </div>
      </div>

      {filteredBudgets.length === 0 && (
        <p className="text-sm text-gray-500">{texts.filters.noResults} </p>
      )}

      {filteredBudgets.length > 0 && (
        <ul className="space-y-5">
          {sortedBudgets.map((item) => (
            <li key={item.id}>
              <Card className="rounded-2xl border-0 bg-white shadow-[0_3px_8px_rgba(0,0,0,0.16)]">
                <CardContent className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 md:p-6">
                  <div>
                    <p className="text-xl font-extrabold">{item.client.name}</p>
                    <p className="text-sm">{item.client.email}</p>
                    <p className="text-sm">{item.client.phone}</p>
                    <p className="text-sm">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold">{texts.history.servicesLabel}</p>
                    <ul className="list-disc pl-5 text-sm">
                      {item.services.map((service) => (
                        <li key={service}>
                          {service === "Web" && item.web
                            ? `Web (${item.web.pages} ${texts.history.pages}, ${item.web.languages} ${texts.history.languages})`
                            : service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="md:text-right">
                    <span className="font-bold">
                      {texts.history.totalLabel}
                    </span>
                    <span className="block text-3xl font-extrabold">
                      {item.total} €
                    </span>
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BudgetList;
