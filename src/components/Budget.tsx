import ServiceCard from "@/components/ServiceCard";
import type { BudgetState } from "@/types/budget-state";
import { useState } from "react";
import services from "@/data/services.json";

const Budget = () => {
  const [budget, setBudget] = useState<BudgetState>({
    seo: false,
    ads: false,
    web: false,
    pages: 1,
    languages: 1,
  });

  const setPages = (page: number) => {
    setBudget((prev) => ({ ...prev, pages: page }));
  };

  const setLanguages = (language: number) => {
    setBudget((prev) => ({ ...prev, languages: language }));
  };

  return (
    <article>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          pages={budget.pages}
          languages={budget.languages}
          setPages={setPages}
          setLanguages={setLanguages}
        />
      ))}
    </article>
  );
};

export default Budget;
