import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { useCart } from '../hooks/useCart';
import { useProducts } from '../hooks/useProducts';

export const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { addProduct } = useCart();
  const { product, loading, error, getRelatedProducts } = useProducts();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addProduct(product);
      }
      navigate(ROUTES.CART, {
        state: {
          message: `${product.name} agregado al carrito`,
        },
      });
    }
  };

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
            Error al cargar el producto
          </h1>
          <p className='text-gray-600 mb-6'>{error}</p>
          <Link
            to={ROUTES.PRODUCTS}
            className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200'
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='text-center py-12'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>
            Producto no encontrado
          </h1>
          <p className='text-gray-600 mb-6'>
            El producto que buscas no existe o ha sido eliminado.
          </p>
          <Link
            to={ROUTES.PRODUCTS}
            className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200'
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      {/* Breadcrumb */}
      <nav className='mb-8'>
        <ol className='flex items-center space-x-2 text-sm text-gray-500'>
          <li>
            <Link to={ROUTES.HOME} className='hover:text-blue-600'>
              Inicio
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to={ROUTES.PRODUCTS} className='hover:text-blue-600'>
              Productos
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              to={`${ROUTES.CATEGORIES}/${product.category}`}
              className='hover:text-blue-600'
            >
              {product.category}
            </Link>
          </li>
          <li>/</li>
          <li className='text-gray-900 font-medium'>{product.name}</li>
        </ol>
      </nav>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Imagen del producto */}
        <div>
          <div className='aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden'>
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-96 object-cover'
            />
          </div>
        </div>

        {/* Información del producto */}
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            {product.name}
          </h1>

          <div className='mb-6'>
            <span className='text-3xl font-bold text-blue-600'>
              ${product.price.toLocaleString()}
            </span>
          </div>

          <p className='text-gray-600 mb-6 leading-relaxed'>
            {product.description}
          </p>

          {/* Especificaciones */}
          <div className='mb-6'>
            <h3 className='text-lg font-semibold text-gray-900 mb-3'>
              Especificaciones
            </h3>
            <div className='grid grid-cols-2 gap-3'>
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className='flex justify-between py-2 border-b border-gray-200'
                >
                  <span className='text-gray-600 capitalize'>
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className='font-medium text-gray-900'>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Características */}
          <div className='mb-6'>
            <h3 className='text-lg font-semibold text-gray-900 mb-3'>
              Características
            </h3>
            <ul className='space-y-2'>
              {product.features.map((feature, index) => (
                <li key={index} className='flex items-start'>
                  <svg
                    className='w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-gray-600'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Selector de cantidad y botón de compra */}
          <div className='border-t border-gray-200 pt-6'>
            <div className='flex items-center space-x-4 mb-4'>
              <label
                htmlFor='quantity'
                className='text-sm font-medium text-gray-700'
              >
                Cantidad:
              </label>
              <select
                id='quantity'
                value={quantity}
                onChange={e => setQuantity(parseInt(e.target.value))}
                className='border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleAddToCart}
              className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center'
            >
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
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01'
                />
              </svg>
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>

      {/* Productos relacionados */}
      {relatedProducts.length > 0 && (
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8'>
            Productos Relacionados
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {relatedProducts.map(relatedProduct => (
              <div
                key={relatedProduct.id}
                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200'
              >
                <div className='aspect-w-16 aspect-h-9 bg-gray-200'>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className='w-full h-48 object-cover'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    {relatedProduct.name}
                  </h3>
                  <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                    {relatedProduct.description}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='text-xl font-bold text-blue-600'>
                      ${relatedProduct.price.toLocaleString()}
                    </span>
                    <Link
                      to={`${ROUTES.PRODUCTS}/${relatedProduct.id}`}
                      className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200'
                    >
                      Ver Detalle
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
