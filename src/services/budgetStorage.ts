import type { SavedBudget } from "../types/saved-budget";

const STORAGE_KEY = "budgetsKey";

export const saveBudget = (newBudget: SavedBudget): void => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const budgets: SavedBudget[] = savedData ? JSON.parse(savedData) : [];
  budgets.push(newBudget);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(budgets));
};

export const getBudgets = (): SavedBudget[] => {
  const savedData = localStorage.getItem(STORAGE_KEY);

  return savedData ? JSON.parse(savedData) : [];
};
