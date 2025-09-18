import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const RegisterForm = ({
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
          <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4'>
            <svg
              className='w-8 h-8 text-green-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
              />
            </svg>
          </div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            Crear Cuenta
          </h1>
          <p className='text-gray-600'>
            Completa los datos para crear tu cuenta
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
          {/* Campo Nombre */}
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-semibold text-gray-700 mb-2'
            >
              Nombre Completo
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
                id='name'
                name='name'
                value={formData.name}
                onChange={onInputChange}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white'
                placeholder='Ingresa tu nombre completo'
                autoComplete='name'
                disabled={loading}
              />
            </div>
          </div>

          {/* Campo Email */}
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-semibold text-gray-700 mb-2'
            >
              Correo Electrónico
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
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              </div>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={onInputChange}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white'
                placeholder='Ingresa tu correo electrónico'
                autoComplete='email'
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
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white'
                placeholder='Crea una contraseña segura'
                autoComplete='new-password'
                disabled={loading}
              />
            </div>
          </div>

          {/* Términos y condiciones */}
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='terms'
              name='terms'
              checked={formData.terms}
              onChange={onInputChange}
              className='h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded'
              disabled={loading}
            />
            <label htmlFor='terms' className='ml-2 block text-sm text-gray-700'>
              Acepto los{' '}
              <a
                href='#'
                className='font-medium text-green-600 hover:text-green-500 transition-colors duration-200'
              >
                términos y condiciones
              </a>
            </label>
          </div>

          {/* Botón de envío */}
          <button
            type='submit'
            disabled={loading}
            className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
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
                  Creando cuenta...
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
                      d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
                    />
                  </svg>
                  Crear Cuenta
                </>
              )}
            </span>
          </button>
        </form>

        {/* Enlace a login */}
        <div className='mt-12 text-center'>
          <p className='text-gray-600'>
            ¿Ya tienes una cuenta?
            <NavLink
              to={ROUTES.LOGIN}
              className='font-semibold text-green-600 hover:text-green-500 transition-all duration-300 hover:scale-105 relative group no-underline'
            >
              <span className='relative z-10'>Inicia sesión aquí</span>
              <div className='absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-50 rounded transition-opacity duration-300'></div>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
