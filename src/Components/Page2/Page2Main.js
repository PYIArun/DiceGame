import React, { useState } from 'react'
import styles from './Page2Main.module.css';
import Button2 from '../Button2/Button2';
import Button from '../Button/Button';

const Page2Main = () => {


  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [score, setScore] = useState(0);
  const [SelectedNumber, setSelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, setError] = useState("");

  const [showRules, setShowRules] = useState(false);

  const toggleSelectedNumber = (value)=>{
    setSelectedNumber(value);
  }

  const generateRandomNumber =  (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  

  const rollDice = ()=>{

    const randomNumber = generateRandomNumber(1,7);

    if(!SelectedNumber){
      setError("You have not selected any number.");
      return;
    }
    setError("");
    if(SelectedNumber === randomNumber){
      setScore((prev)=> prev+2);
      
    }
    else{
      setScore((prev)=> prev-2);    
    }

    setcurrentDice((prev)=>randomNumber);    

  }

  const resetScore = () =>{
    setScore(0);
  }

  const rulesVisibility = ()=>{
    setShowRules((prev) => !prev);
  }
  return (
    <div class={styles.main}>

      <div className={styles.section_1}>
        <div className={styles.score}>
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>

        <div className={styles.textsbuttons}>
            <div className={styles.not_selected}>

            <p>{error}</p>
            </div>
            <div className={styles.buttons}>

              {arrNumber.map((value, i)=>{
                return <Button2 
                isSelected = {value === SelectedNumber}
                onClick = {() => toggleSelectedNumber(value)}
                key={i} text={value} />
              })}

            </div>

            <div className={styles.selected}>
             <p>Select Number</p>
            </div>

        </div>
      </div>

        <div className={styles.section_2}>

        <div className={styles.image_text}>
          <div onClick={()=>{
            rollDice()
            }} >
            <img src={`./images/Dices/dice_${currentDice}.png`} alt= 'dice image'></img>
          </div>
            <p> Click on Dice to Roll</p>
        </div>

        <div className={styles.section2_buttons}>

            <Button onClick={()=>{resetScore()}} isOutline={true} text='Reset Score'/>
            <Button onClick={()=>{rulesVisibility()}} text = {showRules ? 'Hide Rules' : 'Show Rules'} />

        </div>

        </div>


        {
          showRules ?
        <div className={styles.rules_section}>
          <div>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
        </div>
        
          :
          <p></p>
        }
        
    </div>
  )
}

export default Page2Main