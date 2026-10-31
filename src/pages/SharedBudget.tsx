import { useParams } from "react-router";
import { getBudgets } from "@/services/budgetStorage";
import texts from "@/data/texts.json";
import servicesData from "@/data/services.json";
import type { ServiceType } from "@/types/service";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const services = servicesData as ServiceType[];

const SharedBudget = () => {
  const { id } = useParams();

  const budgets = getBudgets();
  const budget = budgets.find((item) => item.id === id);

  if (!budget) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-sm font-medium text-neutral-800">
          {texts.sharedBudget.notFound}
        </p>
      </main>
    );
  }
  const handleShare = async () => {
    if (!id) return;

    const url = `${window.location.origin}/budget/${id}`;

    try {
      await navigator.clipboard.writeText(url);
      toast.success(texts.sharedBudget.shareSuccess);
    } catch (error) {
      console.error("Error en copiar l'enllaç:", error);
      toast.error(texts.sharedBudget.shareError);
    }
  };
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-8 md:py-10">
      <section>
        <h2 className="mb-3 text-xl font-extrabold text-black md:text-2xl">
          {texts.sharedBudget.title}
        </h2>

        <p className="text-sm font-medium text-neutral-800">
          {texts.sharedBudget.description}
        </p>
      </section>

      <Card className="rounded-2xl border-0 bg-white shadow-[0_3px_8px_rgba(0,0,0,0.16)]">
        <CardContent className="p-4 md:p-6 lg:px-8">
          <CardTitle className="mb-5 text-xl font-extrabold text-black md:text-2xl">
            {texts.sharedBudget.clientTitle}
          </CardTitle>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <p className="mb-1 text-sm font-medium text-neutral-500">
                {texts.sharedBudget.nameLabel}
              </p>
              <p className="font-semibold text-black">{budget.client.name}</p>
            </div>

            <div>
              <p className="mb-1 text-sm font-medium text-neutral-500">
                {texts.sharedBudget.phoneLabel}
              </p>
              <p className="font-semibold text-black">{budget.client.phone}</p>
            </div>

            <div>
              <p className="mb-1 text-sm font-medium text-neutral-500">
                {texts.sharedBudget.emailLabel}
              </p>
              <p className="break-all font-semibold text-black">
                {budget.client.email}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <section>
        <h2 className="mb-4 text-xl font-extrabold text-black md:text-2xl">
          {texts.sharedBudget.servicesTitle}
        </h2>

        <div className="space-y-4">
          {budget.services.map((serviceName) => {
            const service = services.find((item) => item.title === serviceName);

            return (
              <Card
                key={serviceName}
                className="rounded-2xl border-0 bg-white shadow-[0_3px_8px_rgba(0,0,0,0.16)]"
              >
                <CardContent className="grid grid-cols-[1fr_auto] items-center gap-4 p-4 md:grid-cols-[1fr_200px] md:gap-8 md:p-6 lg:px-8">
                  <div className="col-span-2 min-w-0 md:col-span-1">
                    <CardTitle className="mb-3 text-xl font-extrabold text-black md:text-2xl">
                      {serviceName}
                    </CardTitle>

                    {service && (
                      <CardDescription className="text-sm font-medium leading-tight text-neutral-800">
                        {service.description}
                      </CardDescription>
                    )}
                  </div>
                  <p className="whitespace-nowrap text-right text-xl font-extrabold text-black md:text-3xl">
                    {service ? `${service.basePrice} €` : ""}
                  </p>
                  {serviceName === "Web" && budget.web && (
                    <div className="col-span-2 grid grid-cols-2 gap-4 rounded-xl bg-[#f0f7f3] p-4">
                      <div>
                        <p className="mb-1 text-sm text-neutral-600">
                          {texts.sharedBudget.pagesLabel}
                        </p>

                        <p className="font-bold text-black">
                          {budget.web.pages} {texts.history.pages}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-sm text-neutral-600">
                          {texts.sharedBudget.languagesLabel}
                        </p>

                        <p className="font-bold text-black">
                          {budget.web.languages} {texts.history.languages}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-3">
          <p className="font-bold text-black">
            {texts.sharedBudget.totalLabel}
          </p>

          <p className="whitespace-nowrap text-2xl font-extrabold text-black md:text-3xl">
            {budget.total} €
          </p>
        </div>

        <button
          type="button"
          onClick={handleShare}
          className="flex items-center gap-2 rounded-lg bg-[#58af8c] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#469875]"
        >
          <Share2 size={18} />
          {texts.sharedBudget.shareButton}
        </button>
      </div>
    </main>
  );
};

export default SharedBudget;
