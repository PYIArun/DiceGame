import React from 'react'
import styles from './Button2.module.css';


const Button2 = (props) => {

  return (
    <button onClick = {props.onClick} className={props.isSelected? styles.filled_button: styles.button}>
        {props.text}
    </button>
  )
}

export default Button2