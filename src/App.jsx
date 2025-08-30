import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

export const App = () => {

  const navItems = ["Inicio", "E-Commerce", "Contacto", "Acerca de nosotros"];

  return (
    <>
      <NavBar links={navItems}/>
      <ItemListContainer mensaje={"Hola a todos"}/>
    </>
  );
};
