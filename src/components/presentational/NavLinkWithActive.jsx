import { NavLink } from 'react-router-dom';

export const NavLinkWithActive = ({ to, children, className = '' }) => {
  const baseClasses = 'px-3 py-2 text-sm font-medium transition-colors duration-200';
  const activeClasses = 'text-blue-600 bg-blue-50 rounded-md';
  const inactiveClasses = 'text-gray-600 hover:text-blue-600';

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className}`
      }
    >
      {children}
    </NavLink>
  );
};
