/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef(({ lable, input }, ref) => (
  <div className={classes.input}>
    <lable htmlFor={input.id}>{lable}</lable>
    <input ref={ref} {...input} />
  </div>
));

export default Input;
