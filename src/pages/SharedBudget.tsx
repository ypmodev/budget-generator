import { useParams } from "react-router";
import { getBudgets } from "@/services/budgetStorage";

const SharedBudget = () => {
  const { id } = useParams();

  const budgets = getBudgets();
  const budget = budgets.find((item) => item.id === id);

  if (!budget) {
    return <p>Pressupost no trobat</p>;
  }

  return (
    <main>
      <h1>Pressupost compartit</h1>

      <h2>Datos del cliente</h2>
      <p>Nombre: {budget.client.name}</p>
      <p>Teléfono: {budget.client.phone}</p>
      <p>Email: {budget.client.email}</p>

      <h2>Presupuesto</h2>
      <p>Servicios: {budget.services.join(", ")}</p>
      <p>Total: {budget.total} €</p>
    </main>
  );
};

export default SharedBudget;
