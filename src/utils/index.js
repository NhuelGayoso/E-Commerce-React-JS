// Utilidades para formateo
export const formatPrice = price => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);
};

// Utilidades para validación
export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = password => {
  return password && password.length >= 6;
};

// Utilidades para manejo de errores
export const getErrorMessage = error => {
  const errorMessages = {
    'auth/user-not-found': 'Usuario no encontrado',
    'auth/wrong-password': 'Contraseña incorrecta',
    'auth/invalid-email': 'El correo electrónico no es válido',
    'auth/email-already-in-use': 'Este correo electrónico ya está registrado',
    'auth/weak-password': 'La contraseña es muy débil',
    'auth/too-many-requests':
      'Demasiados intentos fallidos. Inténtalo más tarde',
  };

  return errorMessages[error.code] || 'Ha ocurrido un error inesperado';
};

// Utilidades para localStorage
export const storage = {
  get: key => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error al obtener del localStorage:', error);
      return null;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  },

  remove: key => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error al eliminar del localStorage:', error);
    }
  },
};

// Utilidades para debounce
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Utilidades para clases CSS
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
