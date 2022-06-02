/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classes from './Input.module.css';

export default function Input({ lable, input }) {
  return (
    <div className={classes.input}>
      <lable htmlFor={input.id}>{lable}</lable>
      <input {...input} />
    </div>
  );
}
