import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ServiceCard from "@/components/ServiceCard";

describe("ServiceCard", () => {
  test("Select service when clicking checkbox", () => {
    const setServiceSelect = vi.fn();

    render(
      <ServiceCard
        id="seo"
        title="SEO"
        description="SEO service"
        basePrice={100}
        pages={1}
        languages={1}
        setPages={vi.fn()}
        setLanguages={vi.fn()}
        setServiceSelect={setServiceSelect}
        isSelected={false}
      />,
    );

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(setServiceSelect).toHaveBeenCalledWith("seo", true);
  });
});
