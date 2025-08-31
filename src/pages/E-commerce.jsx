import { Footer } from "../components/Footer";
import { ItemListContainer } from "../components/ItemListContainer";
import { NavBar } from "../components/NavBar";

export const Ecommerce = () => {
  const navItems = ["Inicio", "E-Commerce", "Contacto", "Acerca de nosotros"];
  return (
    <>
      <NavBar links={navItems} />
      <ItemListContainer />
      <Footer />
    </>
  );
};
