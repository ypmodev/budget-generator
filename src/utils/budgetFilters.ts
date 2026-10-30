import type { SavedBudget } from "@/types/saved-budget";
export type DateOrder = "date" | "desc" | "asc";

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

export const sortBudgetsByDate = (
  budgets: SavedBudget[],
  dateOrder: DateOrder,
): SavedBudget[] => {
  return [...budgets].sort((a, b) => {
    if (dateOrder === "asc") {
      return a.date.localeCompare(b.date);
    }

    return b.date.localeCompare(a.date);
  });
};
