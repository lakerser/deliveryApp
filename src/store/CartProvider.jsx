/* eslint-disable no-case-declarations */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer } from 'react';
import cartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return state;
  }
};

export default function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };
  const cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount.toFixed(2),
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}
