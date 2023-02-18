import Header from "../header";
import { Footer } from "../../page/homePage/styles";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <body>
        <main>
          <Header>
          </Header>
          <Outlet />
          <Footer>FOOTER</Footer>
        </main>
      </body>
    </>
  );
};

export { Layout };