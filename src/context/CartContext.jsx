import { useState, useCallback } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = useCallback(product => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  const removeProduct = useCallback(productId => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback(
    (productId, quantity) => {
      if (quantity <= 0) {
        removeProduct(productId);
        return;
      }
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    },
    [removeProduct]
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const getTotalItems = useCallback(() => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  }, [cart]);

  const getTotalPrice = useCallback(() => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  }, [cart]);

  const value = {
    cart,
    addProduct,
    removeProduct,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
