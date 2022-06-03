/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import cartContext from '../../store/cart-context';
import CartItem from './CartItem/CartItem';

export default function Cart({ onHide }) {
  const cartCTX = useContext(cartContext);
  const hasItems = cartCTX.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCTX.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHide={onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$ ${cartCTX.totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={onHide}
          type="button"
          className={classes['button--alt']}
        >
          Close
        </button>
        {hasItems && (
          <button onClick={onHide} type="button" className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}
