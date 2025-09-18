import logo from '../../assets/FP-logo.png';
import { ROUTES, APP_CONFIG } from '../../constants';
import { NavLinkWithActive } from './NavLinkWithActive';

export const FooterContent = () => {
  return (
    <footer className='bg-white border-t border-gray-200 mt-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo y descripción */}
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center mb-4'>
              <img src={logo} alt='logo' className='w-10 h-10 rounded-full' />
              <span className='ml-3 text-gray-800 font-semibold text-lg'>
                {APP_CONFIG.NAME}
              </span>
            </div>
            <p className='text-gray-600 text-sm max-w-md'>
              {APP_CONFIG.DESCRIPTION}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className='text-gray-800 font-semibold text-sm mb-4'>
              Enlaces Rápidos
            </h3>
            <ul className='space-y-2'>
              <li>
                <NavLinkWithActive to={ROUTES.HOME} className='text-sm'>
                  Inicio
                </NavLinkWithActive>
              </li>
              <li>
                <NavLinkWithActive to={ROUTES.PRODUCTS} className='text-sm'>
                  Productos
                </NavLinkWithActive>
              </li>
              <li>
                <NavLinkWithActive to={ROUTES.CATEGORIES} className='text-sm'>
                  Categorías
                </NavLinkWithActive>
              </li>
              <li>
                <NavLinkWithActive to={ROUTES.CONTACT} className='text-sm'>
                  Contacto
                </NavLinkWithActive>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className='text-gray-800 font-semibold text-sm mb-4'>
              Contacto
            </h3>
            <ul className='space-y-2'>
              <li className='text-gray-600 text-sm'>
                📧 {APP_CONFIG.CONTACT.EMAIL}
              </li>
              <li className='text-gray-600 text-sm'>
                📞 {APP_CONFIG.CONTACT.PHONE}
              </li>
              <li className='text-gray-600 text-sm'>
                📍 {APP_CONFIG.CONTACT.LOCATION}
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className='border-t border-gray-200 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-500 text-sm'>
              © 2024 {APP_CONFIG.NAME}. Todos los derechos reservados.
            </div>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a
                href='#'
                className='text-gray-500 hover:text-blue-600 text-sm transition-colors duration-200'
              >
                Términos y Condiciones
              </a>
              <a
                href='#'
                className='text-gray-500 hover:text-blue-600 text-sm transition-colors duration-200'
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
