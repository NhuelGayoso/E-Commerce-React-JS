// Rutas de la aplicación
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  CONTACT: '/contact',
  CART: '/cart',
  CHECKOUT: '/checkout',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  CATEGORIES: '/categories',
  CATEGORY_PRODUCTS: '/categories/:categoryId',
};

// Configuración de notificaciones
export const NOTIFICATION_CONFIG = {
  AUTO_DISMISS_DELAY: 5000, // 5 segundos
  POSITION: {
    TOP: 'top-20',
    RIGHT: 'right-4',
  },
};

// Configuración de la aplicación
export const APP_CONFIG = {
  NAME: 'Todo Pesca',
  DESCRIPTION: 'Tu tienda especializada en equipos de pesca',
  CONTACT: {
    EMAIL: 'info@todopesca.com',
    PHONE: '+54 11 1234-5678',
    LOCATION: 'Buenos Aires, Argentina',
  },
};

// Mensajes de la aplicación
export const MESSAGES = {
  AUTH: {
    LOGIN_SUCCESS: '¡Bienvenido! Has iniciado sesión correctamente.',
    REGISTER_SUCCESS:
      '¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.',
    LOGOUT_SUCCESS: 'Has cerrado sesión correctamente.',
    LOGIN_REQUIRED: 'Debes iniciar sesión para acceder a esta página.',
    ALREADY_AUTHENTICATED: 'Ya tienes una sesión activa.',
  },
  CART: {
    EMPTY: 'Tu carrito está vacío',
    ITEM_ADDED: 'Producto agregado al carrito',
    ITEM_REMOVED: 'Producto eliminado del carrito',
    CART_CLEARED: 'Carrito vaciado',
  },
  ERRORS: {
    GENERIC: 'Ha ocurrido un error. Inténtalo de nuevo.',
    NETWORK: 'Error de conexión. Verifica tu internet.',
    VALIDATION: 'Por favor, completa todos los campos requeridos.',
  },
};

// Validaciones
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 6,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  REQUIRED_FIELDS: {
    NAME: 'El nombre es requerido',
    EMAIL: 'El correo electrónico es requerido',
    PASSWORD: 'La contraseña es requerida',
    TERMS: 'Debes aceptar los términos y condiciones',
  },
};
