import React, { useState, useEffect } from "react";

import Key from "../Key/Key";
import "./Keyboard.css";

const Keyboard = (props) => {
  const [selectedLetters, setSelectedLetters] = useState("");
  const [letters, setLetters] = useState([
    { character: "A", isClicked: false },
    { character: "B", isClicked: false },
    { character: "C", isClicked: false },
    { character: "D", isClicked: false },
    { character: "E", isClicked: false },
    { character: "F", isClicked: false },
    { character: "G", isClicked: false },
    { character: "H", isClicked: false },
    { character: "I", isClicked: false },
    { character: "J", isClicked: false },
    { character: "K", isClicked: false },
    { character: "L", isClicked: false },
    { character: "M", isClicked: false },
    { character: "N", isClicked: false },
    { character: "O", isClicked: false },
    { character: "P", isClicked: false },
    { character: "Q", isClicked: false },
    { character: "R", isClicked: false },
    { character: "S", isClicked: false },
    { character: "T", isClicked: false },
    { character: "U", isClicked: false },
    { character: "V", isClicked: false },
    { character: "W", isClicked: false },
    { character: "X", isClicked: false },
    { character: "Y", isClicked: false },
    { character: "Z", isClicked: false },
  ]);
  const [selectedWordState, setSelectedWordState] = useState("");
  const [guessWordsState, setGuessWordsState] = useState("");
  const [pointState, setPointState] = useState(0);


   useEffect(()=>{
      setSelectedWordState(props.selectedWord);
   },[props.selectedWord]);

   
   useEffect(()=>{
     let guessWord = selectedWordState.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "_");
     setGuessWordsState(guessWord);
    },[guessWordsState])


  const keyClickHandler = (index, character) => {
    let temp = letters;
    temp[index].isClicked = true;
    setSelectedLetters(selectedLetters + character);
    setLetters(temp);
    
    // Checking if letter entered is correct then revealing it.
    if(selectedWordState.includes(character.toLowerCase())){
      setPointState(pointState + 1);
    // Reveal Letter code here:
    }else{
    //Penalty Score?
    }
  };

  return (
    <>
      <div className="Output">
        <h1>{selectedLetters}</h1>
        <h1>{guessWordsState}</h1>
        <h1>Points: {pointState}</h1>
      </div>
      <div className="Keyboard">
        {letters.map((value, index) => (
          <Key
            key={index}
            value={value.character}
            isClicked={value.isClicked}
            keyClickHandler={keyClickHandler.bind(this, index, value.character)}
          />
        ))}
      </div>
    </>
  );
};

export default Keyboard;
