import { Outlet } from "react-router";
import Banner from "@/components/Banner";
import { Toaster } from "@/components/ui/sonner";

const Layout = () => {
  return (
    <main>
      <Banner />
      <Outlet />
      <Toaster />
    </main>
  );
};

export default Layout;
