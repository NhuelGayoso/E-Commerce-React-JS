import { ROUTES } from '../../constants';
import { NavLinkWithActive } from './NavLinkWithActive';

export const NavBarLinks = () => {
  return (
    <div className='hidden md:block'>
      <ul className='flex space-x-6'>
        <li>
          <NavLinkWithActive to={ROUTES.HOME}>Inicio</NavLinkWithActive>
        </li>
        <li>
          <NavLinkWithActive to={ROUTES.PRODUCTS}>Productos</NavLinkWithActive>
        </li>
        <li>
          <NavLinkWithActive to={ROUTES.CATEGORIES}>
            Categorías
          </NavLinkWithActive>
        </li>
        <li>
          <NavLinkWithActive to={ROUTES.CONTACT}>Contacto</NavLinkWithActive>
        </li>
      </ul>
    </div>
  );
};
