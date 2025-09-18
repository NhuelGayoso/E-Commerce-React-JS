import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const AuthButtons = () => {
  return (
    <div className='hidden md:flex space-x-3'>
      <Link
        to={ROUTES.LOGIN}
        className='text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors duration-200'
      >
        Iniciar sesión
      </Link>
      <Link
        to={ROUTES.REGISTER}
        className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200'
      >
        Registro
      </Link>
    </div>
  );
};
