import { Outlet } from "react-router-dom";
import Header from "./header/header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;