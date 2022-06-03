/* eslint-disable consistent-return */
/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';
import cartContext from '../../store/cart-context';

function Headercardbutton({ onShow }) {
  const [btnHiglite, setButtonHighlighted] = useState(false);
  const context = useContext(cartContext);
  const numbverOfCartItems = context.items.reduce((currentNumber, item) => currentNumber + item.amount, 0);
  const butnClasses = `${classes.button} ${btnHiglite ? classes.bump : ''}`;
  useEffect(() => {
    if (context.items.length === 0) {
      return;
    }
    setButtonHighlighted(true);
    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [context.items]);
  return (
    <button onClick={onShow} className={butnClasses} type="button">
      <span classes={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numbverOfCartItems}</span>
    </button>
  );
}

export default Headercardbutton;
