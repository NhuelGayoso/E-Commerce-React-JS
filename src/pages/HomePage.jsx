import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export const HomePage = () => {
  const navItems = ["Inicio", "E-Commerce", "Contacto", "Acerca de nosotros"];
  return (
    <>
      <NavBar links={navItems} />
      <h1>Home Pages</h1>
      <Footer />
    </>
  );
};
