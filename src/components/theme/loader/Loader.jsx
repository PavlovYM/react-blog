import React from 'react'
import classes from './loader.module.css'

const Loader = () => {
  return (
    <div className={classes.Loader}>
      <div className={classes.LoaderItem}></div>
    </div>
  )
}

export default Loader