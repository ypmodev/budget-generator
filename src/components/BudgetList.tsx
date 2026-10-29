import { Card, CardContent } from "@/components/ui/card";
import type { SavedBudget } from "@/types/saved-budget";
import texts from "@/data/texts.json";

const BudgetList = ({ budgets }: { budgets: SavedBudget[] }) => {
  if (budgets.length === 0) {
    return <p className="text-sm font-medium">{texts.history.empty}</p>;
  }

  return (
    <section>
      <h2 className="mb-4 text-xl font-extrabold text-black md:text-2xl">
        {texts.history.title}
      </h2>

      <ul className="space-y-5">
        {[...budgets].map((item) => (
          <li key={item.id}>
            <Card className="rounded-2xl border-0 bg-white shadow-[0_3px_8px_rgba(0,0,0,0.16)]">
              <CardContent className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 md:p-6">
                <div>
                  <p className="text-xl font-extrabold">{item.client.name}</p>
                  <p className="text-sm">{item.client.email}</p>
                  <p className="text-sm">{item.client.phone}</p>
                  <p className="text-sm">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <p className="font-bold">{texts.history.servicesLabel}</p>
                  <ul className="list-disc pl-5 text-sm">
                    {item.services.map((service) => (
                      <li key={service}>
                        {service === "Web" && item.web
                          ? `Web (${item.web.pages} ${texts.history.pages}, ${item.web.languages} ${texts.history.languages})`
                          : service}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="md:text-right">
                  <span className="font-bold">{texts.history.totalLabel}</span>
                  <span className="block text-3xl font-extrabold">
                    {item.total} €
                  </span>
                </p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BudgetList;
