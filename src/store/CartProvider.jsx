/* eslint-disable operator-linebreak */
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
      // const updatedItems = state.items.concat(action.item);
      const updatedTotalAmountAdd =
        state.totalAmount + action.item.price * action.item.amount;
      const exitingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[exitingCartItemIndex];
      let updatedItemsAdd;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItemsAdd = [...state.items];
        updatedItemsAdd[exitingCartItemIndex] = updatedItem;
      } else {
        updatedItemsAdd = state.items.concat(action.item);
      }
      return {
        items: updatedItemsAdd,
        totalAmount: updatedTotalAmountAdd,
      };

    case 'REMOVE':
      const exitingCartItemIndexTwo = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[exitingCartItemIndexTwo];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[exitingCartItemIndexTwo] = updatedItem;
      }
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
