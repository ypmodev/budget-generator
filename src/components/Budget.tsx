import ServiceCard from "@/components/ServiceCard";
import type { BudgetState } from "@/types/budget-state";
import { useState } from "react";
import servicesData from "@/data/services.json";
import type { ServiceType } from "@/types/service";

const services = servicesData as ServiceType[];
const baseCount = 1;

const Budget = () => {
  const [budget, setBudget] = useState<BudgetState>({
    seo: false,
    ads: false,
    web: false,
    pages: baseCount,
    languages: baseCount,
  });

  const setPages = (page: number) => {
    setBudget((prev) => ({ ...prev, pages: page }));
  };

  const setLanguages = (language: number) => {
    setBudget((prev) => ({ ...prev, languages: language }));
  };

  const setServiceSelect = (id: "seo" | "ads" | "web", selected: boolean) => {
    setBudget((prev) => ({ ...prev, [id]: selected }));

    if (id === "web" && !selected) {
      setPages(baseCount);
      setLanguages(baseCount);
    }
  };

  return (
    <>
      <section className="mx-auto w-full max-w-5xl"></section>
      <article className="mx-auto mt-20 w-full max-w-4xl space-y-5 px-4">
        {" "}
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            pages={budget.pages}
            languages={budget.languages}
            setPages={setPages}
            setLanguages={setLanguages}
            setServiceSelect={setServiceSelect}
            isSelected={budget[service.id]}
          />
        ))}
      </article>
    </>
  );
};

export default Budget;
