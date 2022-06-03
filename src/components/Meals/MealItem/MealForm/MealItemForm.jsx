import React, { useRef, useState } from 'react';
import Input from '../../../UI/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm({ id, onAddToCart }) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    if (
      enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5
    ) {
      setAmountIsValid(false);
    } else {
      setAmountIsValid(true);
    }
    onAddToCart(+enteredAmount);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        lable="Amount"
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '0',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />

      <button type="submit">+ ADD</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}
