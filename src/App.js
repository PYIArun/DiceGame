import React, { useState} from "react";
import './App.css'
import Page1Main from "./Components/Page1/Page1Main";
import Page2Main from "./Components/Page2/Page2Main";

const App = () => {

  const [isGameStarted, setisGameStarted] = useState(true);

  const toggleGame = ()=>{
    setisGameStarted((prev)=>!prev);
  }

  return (
    <>

    {isGameStarted ? <Page2Main/> : <Page1Main toggle={toggleGame} />  }

    </>
  );
};

export default App;