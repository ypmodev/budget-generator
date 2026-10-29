
import type { SavedBudget } from "@/types/saved-budget";

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