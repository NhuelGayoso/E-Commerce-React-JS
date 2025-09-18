export const NotificationDisplay = ({ notification, onClose }) => {
  if (!notification) return null;

  return (
    <div className='fixed top-20 right-4 z-50 max-w-sm'>
      <div
        className={`p-4 rounded-lg shadow-lg ${
          notification.type === 'success'
            ? 'bg-green-50 border border-green-200'
            : 'bg-red-50 border border-red-200'
        }`}
      >
        <div className='flex'>
          <div className='flex-shrink-0'>
            {notification.type === 'success' ? (
              <svg
                className='h-5 w-5 text-green-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            ) : (
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
            )}
          </div>
          <div className='ml-3'>
            <p
              className={`text-sm font-medium ${
                notification.type === 'success'
                  ? 'text-green-800'
                  : 'text-red-800'
              }`}
            >
              {notification.message}
            </p>
          </div>
          <div className='ml-auto pl-3'>
            <button
              onClick={onClose}
              className={`inline-flex rounded-md p-1.5 ${
                notification.type === 'success'
                  ? 'text-green-500 hover:bg-green-100'
                  : 'text-red-500 hover:bg-red-100'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600`}
            >
              <svg className='h-3 w-3' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
