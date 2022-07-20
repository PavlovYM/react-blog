import React from "react";
import classes from './select.module.css';

const MySelect = ({ value, onChange, defaultValue, options }) => {
  return (
    <select
      className={classes.MySelect}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled={true}>{defaultValue}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
