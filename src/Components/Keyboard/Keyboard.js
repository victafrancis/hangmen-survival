import React, { useState, useEffect } from "react";

import Key from "../Key/Key";
import "./Keyboard.css";

const Keyboard = () => {
  const [selectedLetters, setSelectedLetters] = useState("");
  const [letters, setLetters] = useState([
    { character: "a", isClicked: false },
    { character: "b", isClicked: false },
    { character: "c", isClicked: false },
    { character: "d", isClicked: false },
    { character: "e", isClicked: false },
    { character: "f", isClicked: false },
    { character: "g", isClicked: false },
    { character: "h", isClicked: false },
    { character: "i", isClicked: false },
    { character: "j", isClicked: false },
    { character: "k", isClicked: false },
    { character: "l", isClicked: false },
    { character: "m", isClicked: false },
    { character: "n", isClicked: false },
    { character: "o", isClicked: false },
    { character: "p", isClicked: false },
    { character: "q", isClicked: false },
    { character: "r", isClicked: false },
    { character: "s", isClicked: false },
    { character: "t", isClicked: false },
    { character: "u", isClicked: false },
    { character: "v", isClicked: false },
    { character: "w", isClicked: false },
    { character: "x", isClicked: false },
    { character: "y", isClicked: false },
    { character: "z", isClicked: false },
  ]);

  const keyClickHandler = (index, character) => {
    let temp = letters;
    temp[index].isClicked = true;

    setSelectedLetters(selectedLetters + character);
    setLetters(temp);
  };

  return (
    <>
      <div className="Output">
        <h1>{selectedLetters}</h1>
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
