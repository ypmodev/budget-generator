import type { BudgetState } from "@/types/budget-state";
import type { ServiceType } from "@/types/service";

export const getSelectedServices = (
  services: ServiceType[],
  budget: BudgetState,
) => {
  return services.filter((service) => budget[service.id]);
};

export const getWebService = (selectedServices: ServiceType[]) => {
  return selectedServices.find((service) => service.id === "web");
};

export const calculateExtraCostWeb = (
  quantity: number,
  included: number,
  pricePerExtra: number,
) => {
  if (quantity > included) {
    return (quantity - included) * pricePerExtra;
  }
  return 0;
};

export const calculateTotalBudget = (
  selectedServices: ServiceType[],
  pages: number,
  languages: number,
) => {
  let servicesCost = 0;
  let costExtraPages = 0;
  let costExtraLanguages = 0;

  selectedServices.forEach((service) => {
    servicesCost += service.basePrice;
  });

  const webService = getWebService(selectedServices);

  if (
    webService &&
    webService.basePagesIncluded !== undefined &&
    webService.baseLanguagesIncluded !== undefined &&
    webService.pricePerExtraPageOrLanguage !== undefined
  ) {
    costExtraPages = calculateExtraCostWeb(
      pages,
      webService.basePagesIncluded,
      webService.pricePerExtraPageOrLanguage,
    );

    costExtraLanguages = calculateExtraCostWeb(
      languages,
      webService.baseLanguagesIncluded,
      webService.pricePerExtraPageOrLanguage,
    );
  }

  const total = servicesCost + costExtraPages + costExtraLanguages;

  return {
    servicesCost,
    costExtraPages,
    costExtraLanguages,
    total,
  };
};
