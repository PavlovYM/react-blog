import React from 'react'
import classes from './dialog.module.css'

const MyDialog = ({children, show, onClick}) => {
  let rootClass = [classes.MyDialog]
  if(show) {
    rootClass.push(classes.active)
  }

  return (
    <div className={rootClass.join(' ')} onClick={() => onClick(false)}>
      <div className={classes.MyDialogContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyDialog