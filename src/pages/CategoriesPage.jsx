import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { useProducts } from '../hooks/useProducts';

export const CategoriesPage = () => {
  const { categories } = useProducts();

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='mb-12 text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Categorías de Productos
        </h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          Explora nuestra amplia gama de equipos de pesca organizados por
          categorías. Encuentra exactamente lo que necesitas para tu próxima
          aventura de pesca.
        </p>
      </div>

      {/* Grid de categorías */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {categories.map(category => (
          <Link
            key={category.id}
            to={`${ROUTES.CATEGORIES}/${category.id}`}
            className='group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
          >
            <div className='aspect-w-16 aspect-h-9 bg-gray-200'>
              <img
                src='/api/placeholder/400/300'
                alt={category.name}
                className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200'>
                {category.name}
              </h3>
              <p className='text-gray-600 mb-4 line-clamp-3'>
                Explora nuestra selección de {category.name.toLowerCase()}
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-500'>
                  {category.productCount} productos
                </span>
                <div className='flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-200'>
                  <span className='text-sm font-medium mr-1'>
                    Ver productos
                  </span>
                  <svg
                    className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to action */}
      <div className='mt-16 text-center'>
        <div className='bg-blue-50 rounded-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            ¿No encuentras lo que buscas?
          </h2>
          <p className='text-gray-600 mb-6'>
            Explora todos nuestros productos o contáctanos para obtener ayuda
            personalizada.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to={ROUTES.PRODUCTS}
              className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200'
            >
              Ver todos los productos
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className='bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200'
            >
              Contactar soporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
