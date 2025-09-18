import { FaShoppingCart } from 'react-icons/fa';

export const CartWidgetDisplay = ({ totalItems }) => {
  return (
    <div className='relative group'>
      <div className='flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors duration-200 cursor-pointer'>
        <FaShoppingCart className='text-gray-600 text-lg' />
        <span className='text-gray-700 font-medium text-sm'>{totalItems}</span>
      </div>

      {/* Badge de notificación */}
      {totalItems > 0 && (
        <div className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
          {totalItems > 99 ? '99+' : totalItems}
        </div>
      )}

      {/* Tooltip */}
      <div className='absolute bottom-full right-0 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-50'>
        {totalItems === 0
          ? 'Carrito vacío'
          : `${totalItems} producto${
              totalItems !== 1 ? 's' : ''
            } en el carrito`}
      </div>
    </div>
  );
};
