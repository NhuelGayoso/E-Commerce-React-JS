import { Link } from 'react-router-dom';
import logo from '../../assets/FP-logo.png';
import { APP_CONFIG } from '../../constants';

export const NavBarBrand = () => {
  return (
    <div>
      <Link to='/' className='flex items-center'>
        <img src={logo} alt='logo' className='w-10 h-10 rounded-full' />
        <span className='ml-3 text-gray-800 font-semibold text-lg'>
          {APP_CONFIG.NAME}
        </span>
      </Link>
    </div>
  );
};
