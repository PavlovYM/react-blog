import React from 'react'
import classes from './input.module.css';
const MyInput = (props) => {
  return (
    <input {...props} className={classes.MyInput}/>
  )
}

export default MyInput