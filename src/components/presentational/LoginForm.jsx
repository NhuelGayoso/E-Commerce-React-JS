import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const LoginForm = ({
  formData,
  loading,
  error,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div className='lg:w-1/2 p-8 lg:p-16'>
      <div className='max-w-md mx-auto'>
        {/* Header del formulario */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
            <svg
              className='w-8 h-8 text-blue-600'
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
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            Iniciar Sesión
          </h1>
          <p className='text-gray-600'>
            Ingresa tus credenciales para acceder a tu cuenta
          </p>
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg'>
            <div className='flex'>
              <div className='flex-shrink-0'>
                <svg
                  className='h-5 w-5 text-red-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='ml-3'>
                <p className='text-sm text-red-800'>{error}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={onSubmit} className='space-y-6'>
          {/* Campo Usuario */}
          <div>
            <label
              htmlFor='username'
              className='block text-sm font-semibold text-gray-700 mb-2'
            >
              Usuario
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
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
              <input
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={onInputChange}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white'
                placeholder='Ingresa tu usuario'
                autoComplete='username'
                disabled={loading}
              />
            </div>
          </div>

          {/* Campo Contraseña */}
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-semibold text-gray-700 mb-2'
            >
              Contraseña
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </div>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={onInputChange}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white'
                placeholder='Ingresa tu contraseña'
                autoComplete='current-password'
                disabled={loading}
              />
            </div>
          </div>

          {/* Recordarme y Olvidé contraseña */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='remember'
                name='remember'
                className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                disabled={loading}
              />
              <label
                htmlFor='remember'
                className='ml-2 block text-sm text-gray-700'
              >
                Recordarme
              </label>
            </div>
            <div className='text-sm'>
              <a
                href='#'
                className='font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200'
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          {/* Botón de envío */}
          <button
            type='submit'
            disabled={loading}
            className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
          >
            <span className='flex items-center'>
              {loading ? (
                <>
                  <svg
                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Iniciando sesión...
                </>
              ) : (
                <>
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                    />
                  </svg>
                  Iniciar Sesión
                </>
              )}
            </span>
          </button>
        </form>

        {/* Enlace a registro */}
        <div className='mt-12 text-center'>
          <p className='text-gray-600'>
            ¿No tienes una cuenta?{' '}
            <NavLink
              to={ROUTES.REGISTER}
              className='font-semibold text-blue-600 hover:text-blue-500 transition-all duration-300 hover:scale-105 relative group no-underline'
            >
              <span className='relative z-10'>Regístrate aquí</span>
              <div className='absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-50 rounded transition-opacity duration-300'></div>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
