import { Outlet, Link } from "react-router-dom";
import Header from "../components/appbar";

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default Layout;
