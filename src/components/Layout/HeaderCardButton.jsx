import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';

function Headercardbutton({ onShow }) {
  return (
    <button onClick={onShow} className={classes.button} type="button">
      <span classes={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default Headercardbutton;
