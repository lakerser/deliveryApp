import React from 'react';

import classes from './Header.module.css';

import mealsImage from '../../assets/images/meals.jpeg';

import HeaderCardButton from './HeaderCardButton';

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}
