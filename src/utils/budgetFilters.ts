import type { SavedBudget } from "@/types/saved-budget";
export type SortBy = "date" | "import" | "name";

export const searchBudgets = (
  budgets: SavedBudget[],
  search: string,
): SavedBudget[] => {
  const text = search.toLowerCase().trim();

  return budgets.filter(
    (budget) =>
      budget.client.name.toLowerCase().includes(text) ||
      budget.client.email.toLowerCase().includes(text) ||
      budget.client.phone.includes(text),
  );
};

export const sortBudgets = (
  budgets: SavedBudget[],
  sortBy: SortBy,
  isAscending: boolean,
): SavedBudget[] => {
  const sorted = [...budgets].sort((a, b) => {
    if (sortBy === "date") {
      return a.date.localeCompare(b.date);
    }
    if (sortBy === "import") {
      return a.total - b.total;
    }

    return 0;
  });
  if (isAscending) {
    return sorted;
  }

  return sorted.reverse();
};
