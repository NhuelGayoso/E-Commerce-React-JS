import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { useProducts } from '../hooks/useProducts';

export const ProductsPage = () => {
  const { products, loading, error, categories, getCurrentCategory } =
    useProducts();

  if (loading) {
    return (
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex justify-center items-center h-64'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='text-center py-12'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>
            Error al cargar productos
          </h1>
          <p className='text-gray-600 mb-6'>{error}</p>
          <Link
            to={ROUTES.PRODUCTS}
            className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200'
          >
            Intentar de nuevo
          </Link>
        </div>
      </div>
    );
  }

  const currentCategory = getCurrentCategory();

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-4'>
          {currentCategory ? currentCategory.name : 'Todos los Productos'}
        </h1>
        <p className='text-gray-600'>
          {currentCategory
            ? `Explora nuestra selección de ${currentCategory.name.toLowerCase()}`
            : 'Descubre nuestra amplia gama de equipos de pesca'}
        </p>
      </div>

      {/* Filtros de categoría */}
      <div className='mb-8'>
        <div className='flex flex-wrap gap-2'>
          <Link
            to={ROUTES.PRODUCTS}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              !currentCategory
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Todas las categorías
          </Link>
          {categories.map(category => (
            <Link
              key={category.id}
              to={`${ROUTES.CATEGORIES}/${category.id}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                currentCategory?.id === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Grid de productos */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {products.map(product => (
          <div
            key={product.id}
            className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200'
          >
            <div className='aspect-w-16 aspect-h-9 bg-gray-200'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-48 object-cover'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {product.name}
              </h3>
              <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                {product.description}
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-bold text-blue-600'>
                  ${product.price.toLocaleString()}
                </span>
                <Link
                  to={`${ROUTES.PRODUCTS}/${product.id}`}
                  className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200'
                >
                  Ver Detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-500 text-lg'>
            No se encontraron productos en esta categoría.
          </p>
        </div>
      )}
    </div>
  );
};
