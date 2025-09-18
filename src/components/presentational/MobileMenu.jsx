import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { NavLinkWithActive } from './NavLinkWithActive';

export const MobileMenu = ({ isAuthenticated, user, onLogout }) => {
  return (
    <div className='md:hidden'>
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2 border border-gray-200'>
        <NavLinkWithActive
          to={ROUTES.HOME}
          className='block text-base font-medium'
        >
          Inicio
        </NavLinkWithActive>
        <NavLinkWithActive
          to={ROUTES.PRODUCTS}
          className='block text-base font-medium'
        >
          Productos
        </NavLinkWithActive>
        <NavLinkWithActive
          to={ROUTES.CATEGORIES}
          className='block text-base font-medium'
        >
          Categorías
        </NavLinkWithActive>
        <NavLinkWithActive
          to={ROUTES.CONTACT}
          className='block text-base font-medium'
        >
          Contacto
        </NavLinkWithActive>
        <div className='pt-2 space-y-1'>
          {isAuthenticated ? (
            <>
              <div className='flex items-center space-x-2 px-3 py-2 bg-blue-50 rounded-md'>
                <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center'>
                  <svg
                    className='w-4 h-4 text-blue-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                </div>
                <div className='text-gray-700'>
                  <p className='text-sm font-medium'>
                    {user?.displayName ||
                      user?.email?.split('@')[0] ||
                      'Usuario'}
                  </p>
                  <p className='text-xs text-gray-500'>Logueado</p>
                </div>
              </div>
              <button
                onClick={onLogout}
                className='text-gray-600 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left'
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link
                to={ROUTES.LOGIN}
                className='text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium'
              >
                Iniciar sesión
              </Link>
              <Link
                to={ROUTES.REGISTER}
                className='text-blue-600 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium'
              >
                Registro
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
