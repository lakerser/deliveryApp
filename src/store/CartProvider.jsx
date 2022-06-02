/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import cartContext from './cart-context';

export default function CartProvider({ children }) {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const cart = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <cartContext.Provider value={cart}>{children}</cartContext.Provider>
  );
}
