import React from 'react';
import Input from '../../../UI/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm({ id }) {
  return (
    <form className={classes.form}>
      <Input
        lable="Amount"
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />

      <button type="button">+ ADD</button>
    </form>
  );
}
