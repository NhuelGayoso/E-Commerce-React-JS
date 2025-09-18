import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from '../constants';
import { CartWidget } from './CartWidget';
import { NavBarBrand } from './presentational/NavBarBrand';
import { NavBarLinks } from './presentational/NavBarLinks';
import { UserProfile } from './presentational/UserProfile';
import { AuthButtons } from './presentational/AuthButtons';
import { MobileMenu } from './presentational/MobileMenu';

export const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const userProfileProps = {
    user,
    onLogout: handleLogout,
  };

  const mobileMenuProps = {
    isAuthenticated,
    user,
    onLogout: handleLogout,
  };

  return (
    <nav className='bg-white shadow-md sticky top-0 z-50 border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <NavBarBrand />
          <NavBarLinks />

          <div className='flex items-center space-x-4'>
            {isAuthenticated ? (
              <UserProfile {...userProfileProps} />
            ) : (
              <AuthButtons />
            )}
            <Link
              to={ROUTES.CART}
              className='text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200'
            >
              <CartWidget />
            </Link>
          </div>

          <div className='md:hidden'>
            <button className='text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600'>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>

        <MobileMenu {...mobileMenuProps} />
      </div>
    </nav>
  );
};
