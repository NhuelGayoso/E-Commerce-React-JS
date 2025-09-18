import logo from '../../assets/FP-logo.png';

export const AuthLayout = ({
  children,
  title,
  subtitle,
  gradientColor = 'blue',
}) => {
  const gradientClass =
    gradientColor === 'blue' ? 'from-blue-900/50' : 'from-green-900/50';

  const textColor =
    gradientColor === 'blue' ? 'text-blue-100' : 'text-green-100';

  return (
    <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl w-full'>
        <div className='bg-white rounded-2xl shadow-2xl overflow-hidden'>
          <div className='flex flex-col lg:flex-row'>
            {/* Imagen lateral */}
            <div className='lg:w-1/2 relative'>
              <img
                src={logo}
                alt='logo'
                className='w-full h-64 lg:h-full object-cover'
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${gradientClass} to-transparent lg:block hidden`}
              ></div>
              <div className='absolute bottom-6 left-6 text-white lg:block hidden'>
                <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                <p className={textColor}>{subtitle}</p>
              </div>
            </div>

            {/* Contenido del formulario */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
