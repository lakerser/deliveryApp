import React from 'react';
import classes from './MealsItem.module.css';

export default function MealsItem({ name, description, price }) {
  const fixedPrice = `$${price.toFixed()}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{fixedPrice}</div>
      </div>
      <div>{}</div>
    </li>
  );
}
