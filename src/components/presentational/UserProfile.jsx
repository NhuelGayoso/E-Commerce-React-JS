export const UserProfile = ({ user, onLogout }) => {
  return (
    <div className='hidden md:flex items-center space-x-3'>
      <div className='flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2'>
        <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
          <svg
            className='w-5 h-5 text-blue-600'
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
            {user?.displayName || user?.email?.split('@')[0] || 'Usuario'}
          </p>
          <p className='text-xs text-gray-500'>Logueado</p>
        </div>
      </div>
      <button
        onClick={onLogout}
        className='text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200'
      >
        Cerrar sesión
      </button>
    </div>
  );
};
