import { Card, CardContent } from "@/components/ui/card";
import type { SavedBudget } from "@/types/saved-budget";
import texts from "@/data/texts.json";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { searchBudgets, sortBudgets } from "@/utils/budgetFilters";
import type { SortBy } from "@/utils/budgetFilters";
import { useNavigate } from "react-router";

const sortOptions: { value: SortBy; label: string }[] = [
  { value: "date", label: texts.filters.date },
  { value: "import", label: texts.filters.import },
  { value: "name", label: texts.filters.name },
];

const startsAscending = {
  date: false,
  import: false,
  name: false,
};

const BudgetList = ({ budgets }: { budgets: SavedBudget[] }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [sortBy, setSortBy] = useState<SortBy>("date");
  const [isAscending, setIsAscending] = useState(false);

  const filteredBudgets = searchBudgets(budgets, search);
  const sortedBudgets = sortBudgets(filteredBudgets, sortBy, isAscending);
  const navigate = useNavigate();

  const handleSort = (newSortBy: SortBy) => {
    if (newSortBy === sortBy) {
      setIsAscending(!isAscending);
    } else {
      setSortBy(newSortBy);
      setIsAscending(startsAscending[newSortBy]);
    }
  };

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

          <div
            role="group"
            aria-label={texts.filters.sortBy}
            className="flex items-center gap-5"
          >
            {sortOptions.map((option) => {
              const isActive = sortBy === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSort(option.value)}
                  aria-pressed={isActive}
                  className={`whitespace-nowrap text-sm hover:text-black ${
                    isActive
                      ? "font-bold text-black"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {option.label}
                  {isActive && (
                    <span aria-hidden="true"> {isAscending ? "↑" : "↓"}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {filteredBudgets.length === 0 && (
        <p className="mb-40 mt-20 text-sm text-gray-500">
          {texts.filters.noResults}
        </p>
      )}

      {filteredBudgets.length > 0 && (
        <ul className="space-y-5">
          {sortedBudgets.map((item) => (
            <li key={item.id}>
              <Card
                role="link"
                tabIndex={0}
                onClick={() => navigate(`/budget/${item.id}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    navigate(`/budget/${item.id}`);
                  }
                }}
                className="cursor-pointer rounded-2xl border-2 border-transparent bg-white shadow-[0_3px_8px_rgba(0,0,0,0.16)] transition-all duration-200 hover:border-[#58af8c] hover:bg-[#f0f7f3] hover:shadow-md"
              >
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
