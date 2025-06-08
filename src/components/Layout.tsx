import Nav from "../components/nav";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

export default Layout;
