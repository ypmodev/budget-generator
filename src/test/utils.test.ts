import { describe, test, expect } from "vitest";
import { calculateExtraCostWeb } from "@/utils/calculateBudget";

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
