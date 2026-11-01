import { createBrowserRouter } from "react-router";
import Layout from "@/components/layout/Layout";
import App from "@/App";
import SharedBudget from "@/pages/SharedBudget";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/budget/:id",
        element: <SharedBudget />,
      },
    ],
  },
]);

export default router;