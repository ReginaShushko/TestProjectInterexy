import { Outlet } from "react-router-dom";
import Header from "../header";

import { Footer } from "../../page/homePage/styles";

const Layout = () => {
  return (
    <>
      <main>
        <Header></Header>
        <Outlet />
        <Footer>FOOTER</Footer>
      </main>
    </>
  );
};

export { Layout };