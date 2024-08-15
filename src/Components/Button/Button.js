import React, { useState } from 'react'
import styles from './Button.module.css';


const Button = (props) => {
    
  return (
    <button onClick={props.onClick} className={props.isOutline? styles.outline_btn : styles.btn}>
        {props.text}
    </button>
  )
}

export default Button