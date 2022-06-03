/* eslint-disable import/no-named-as-default */
import React, { useContext } from 'react';
import classes from './MealsItem.module.css';
import MealItemForm from './MealForm/MealItemForm';
import cartContext from '../../../store/cart-context';

export default function MealsItem({ name, description, price, id }) {
  const context = useContext(cartContext);
  const fixedPrice = `$${price.toFixed()}`;

  const addToCartHandler = (amount) => {
    context.addItem({
      id,
      name,
      amount,
      price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
}
