import React from 'react'
import styles from './Page1Main.module.css';
import Button from '../Button/Button';

const Page1Main = (props) => {
  return (
    <div className={styles.page_section}>
        <div className= {styles.image_section}>
            <img src="./images/dices1.png" alt='dice image' />
        </div>
        <div className={styles.content_section}>
            <h1>DICE GAME</h1>
            <div className={styles.button}>
            <Button onClick={props.toggle} text='Play Now'/>
            </div>
        </div>
    </div>
  )
}

export default Page1Main