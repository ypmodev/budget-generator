import { Outlet } from "react-router";
import Banner from "@/components/Banner";

const Layout = () => {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
};

export default Layout;
