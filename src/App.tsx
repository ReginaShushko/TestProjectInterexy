import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./page/homePage/homePage";
import { Layout } from "./Components/layout/layout";
import { ContactUs } from "./page/contactUs/contactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactUs></ContactUs>} />
      </Route>
    </Routes>
  );
}

export default App;