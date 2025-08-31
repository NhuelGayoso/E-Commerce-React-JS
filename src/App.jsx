import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Ecommerce } from "./pages/E-commerce";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
    </Routes>
  );
};
