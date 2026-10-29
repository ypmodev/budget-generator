import ServiceCard from "@/components/ServiceCard";
import type { BudgetState } from "@/types/budget-state";
import { useState } from "react";
import servicesData from "@/data/services.json";
import type { ServiceId, ServiceType } from "@/types/service";
import texts from "@/data/texts.json";
import {
  getSelectedServices,
  calculateTotalBudget,
} from "@/utils/calculateBudget";
import FormClient from "@/components/FormClient";

import { saveBudget } from "@/services/budgetStorage";
import type { SavedBudget } from "@/types/saved-budget";
import type { FormValues } from "@/schemas/clientFormSchema";

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

  const setServiceSelect = (id: ServiceId, selected: boolean) => {
    setBudget((prev) => ({ ...prev, [id]: selected }));

    if (id === "web" && !selected) {
      setPages(baseCount);
      setLanguages(baseCount);
    }
  };
  const selectedServices = getSelectedServices(services, budget);

  const totalBudget = calculateTotalBudget(
    selectedServices,
    budget.pages,
    budget.languages,
  );
  //const [savedBudgets, setSavedBudgets] = useState<SavedBudget[]>(getBudgets);

  const handleSaveBudget = (clientData: FormValues) => {
    const newBudget: SavedBudget = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      client: clientData,
      services: selectedServices.map((service) => service.title),
      total: totalBudget.total,
    };

    if (budget.web) {
      newBudget.web = {
        pages: budget.pages,
        languages: budget.languages,
      };
    }

    saveBudget(newBudget);
    console.log(newBudget);
    // setSavedBudgets(getBudgets());
  };

  return (
    <>
      <section className="mx-auto w-full max-w-4xl px-4 pt-8 pb-4 md:pt-12">
        <h2 className="text-l font-extrabold text-black md:text-2xl lg:text-3xl">
          {texts.budgetTitle}
        </h2>

        <p className="mt-3 text-sm font-medium md:text-base">
          {texts.budgetDescription}
        </p>
      </section>

      <article className="mx-auto mt-6 w-full max-w-4xl space-y-5 px-4">
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
      <section className="mx-auto mt-8 w-full max-w-4xl px-4 text-right">
        <p aria-live="polite">
          <span className="text-lg font-bold">{texts.totalLabel}</span>
          <span className="ml-3 text-3xl font-extrabold">
            {totalBudget.total} €
          </span>
        </p>
      </section>
      <section className="mx-auto mt-10 mb-10 w-full max-w-4xl px-4">
        <FormClient
          hasSelectedServices={selectedServices.length > 0}
          onSaveBudget={handleSaveBudget}
        />
      </section>
    </>
  );
};

export default Budget;
