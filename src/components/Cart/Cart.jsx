import React from 'react';
import classes from './Cart.module.css';

export default function Cart() {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div classes={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes.s['button--alt']}>
          Close
        </button>
        <button type="button" className={classes.button}>
          Order
        </button>
      </div>
    </div>
  );
}