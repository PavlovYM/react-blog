import React from 'react'
import classes from './button.module.css'
const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.MyButton}>{children}</button>
  )
}

export default MyButton