import { describe, test, expect } from "vitest";
import { calculateExtraCostWeb } from "@/utils/calculateBudget";
import { getSelectedServices } from "@/utils/calculateBudget";
import type { ServiceType } from "@/types/service";
import type { BudgetState } from "@/types/budget-state";

describe("Calculate extra web cost", () => {
  const quantity = 2;
  const included = 1;
  const pricePerExtra = 30;
  test("Calculate cost when there are extra pages", () => {
    const result = calculateExtraCostWeb(quantity, included, pricePerExtra);
    expect(result).toBe(30);
  });

  test("Return 0 when there are no extra pages", () => {
    const quantity = 1;
    const included = 1;
    const pricePerExtra = 30;
    const result = calculateExtraCostWeb(quantity, included, pricePerExtra);
    expect(result).toBe(0);
  });
});

describe("Get selected services", () => {
  test("Select service", () => {
    const services = [{ id: "seo" }, { id: "web" }] as ServiceType[];

    const budget = {
      seo: true,
      web: false,
    } as BudgetState;

    const result = getSelectedServices(services, budget);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("seo");
  });
});


