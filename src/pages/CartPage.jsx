import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ROUTES } from '../constants';

export const CartPage = () => {
  const {
    cart,
    removeProduct,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeProduct(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = productId => {
    removeProduct(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='text-center'>
          <div className='mb-8'>
            <svg
              className='mx-auto h-24 w-24 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01'
              />
            </svg>
          </div>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            Tu carrito está vacío
          </h1>
          <p className='text-gray-600 mb-8'>
            Agrega algunos productos para comenzar tu compra
          </p>
          <Link
            to={ROUTES.PRODUCTS}
            className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200'
          >
            Ver Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>
          Carrito de Compras
        </h1>
        <p className='text-gray-600'>
          {getTotalItems()} producto{getTotalItems() !== 1 ? 's' : ''} en tu
          carrito
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Lista de productos */}
        <div className='lg:col-span-2'>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='px-6 py-4 border-b border-gray-200'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold text-gray-900'>
                  Productos
                </h2>
                <button
                  onClick={handleClearCart}
                  className='text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200'
                >
                  Vaciar carrito
                </button>
              </div>
            </div>

            <div className='divide-y divide-gray-200'>
              {cart.map(item => (
                <div key={item.id} className='p-6'>
                  <div className='flex items-center space-x-4'>
                    {/* Imagen del producto */}
                    <div className='flex-shrink-0'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-20 h-20 object-cover rounded-lg'
                      />
                    </div>

                    {/* Información del producto */}
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                        {item.name}
                      </h3>
                      <p className='text-gray-600 text-sm mb-2'>
                        {item.description}
                      </p>
                      <p className='text-lg font-bold text-blue-600'>
                        ${item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Controles de cantidad */}
                    <div className='flex items-center space-x-3'>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className='w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200'
                      >
                        <svg
                          className='w-4 h-4 text-gray-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M20 12H4'
                          />
                        </svg>
                      </button>

                      <span className='w-12 text-center font-semibold text-gray-900'>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className='w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200'
                      >
                        <svg
                          className='w-4 h-4 text-gray-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Precio total del item */}
                    <div className='text-right'>
                      <p className='text-lg font-bold text-gray-900'>
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    {/* Botón eliminar */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className='text-red-600 hover:text-red-700 p-2 transition-colors duration-200'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resumen del pedido */}
        <div className='lg:col-span-1'>
          <div className='bg-white rounded-lg shadow-md p-6 sticky top-8'>
            <h2 className='text-lg font-semibold text-gray-900 mb-4'>
              Resumen del Pedido
            </h2>

            <div className='space-y-3 mb-6'>
              <div className='flex justify-between text-gray-600'>
                <span>Subtotal ({getTotalItems()} productos)</span>
                <span>${getTotalPrice().toLocaleString()}</span>
              </div>
              <div className='flex justify-between text-gray-600'>
                <span>Envío</span>
                <span className='text-green-600 font-semibold'>Gratis</span>
              </div>
              <div className='border-t border-gray-200 pt-3'>
                <div className='flex justify-between text-lg font-bold text-gray-900'>
                  <span>Total</span>
                  <span>${getTotalPrice().toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className='space-y-3'>
              <Link
                to={ROUTES.CHECKOUT}
                className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center block'
              >
                Proceder al Pago
              </Link>

              <Link
                to={ROUTES.PRODUCTS}
                className='w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 text-center block'
              >
                Seguir Comprando
              </Link>
            </div>

            {/* Información adicional */}
            <div className='mt-6 pt-6 border-t border-gray-200'>
              <div className='flex items-center text-sm text-gray-600 mb-2'>
                <svg
                  className='w-4 h-4 mr-2 text-green-600'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
                Envío gratis a todo el país
              </div>
              <div className='flex items-center text-sm text-gray-600 mb-2'>
                <svg
                  className='w-4 h-4 mr-2 text-green-600'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
                Cuotas sin interés
              </div>
              <div className='flex items-center text-sm text-gray-600'>
                <svg
                  className='w-4 h-4 mr-2 text-green-600'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
                Devolución gratuita
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
