/* eslint-disable max-len */
import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';
import cartContext from '../../store/cart-context';

function Headercardbutton({ onShow }) {
  const context = useContext(cartContext);

  const numbverOfCartItems = context.items.reduce((currentNumber, item) => currentNumber + item.amount, 0);
  return (
    <button onClick={onShow} className={classes.button} type="button">
      <span classes={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numbverOfCartItems}</span>
    </button>
  );
}

export default Headercardbutton;
