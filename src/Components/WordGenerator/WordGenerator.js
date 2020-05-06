import React, { useState } from "react";
import "./WordGenerator.css"
import styled from 'styled-components';
import backgroundImage from './assets/image.jpg'

//Style Components ->
const StyledDiv = styled.div`
    margin: 0;
    background-color: white;
    width: 100%;
    text-align: center;
    `;

const StyledHeader = styled.div`
position: relative;
width: 100%;
text-align: center;
height: 500px;
overflow: hidden;
background-image: url(${backgroundImage});

&:after {
  position: absolute;
  content: "";
  width: 100%;
  bottom: 0;
  left: 0;
  border-bottom: 300px solid #264653;
  border-left: 1900px solid transparent;
  background-size: cover;
}
`;

const StyledImage = styled.p`
padding-top: 50px;
`;

const StyledInstruction = styled.div`
text-align: center;
width: 100%;
height: 300px;
background-color: #264653;
`;

const StyledInstructionP = styled.p`
margin: 0 auto;
width: 50%;
padding-top: 0 auto;
font-size: 40px;
color: white;
`;

const WordGenDiv = styled.div`
background-color: #e9c46a;
padding: 5px;
`;
// <- Styled Components

const WordGen = (props) => {
  const [wordsState, setWordsState] = useState({
    words: [
      { category: "colors", word: "goldenrod" },
      { category: "colors", word: "lavender" },
      { category: "colors", word: "periwinkle" },
      { category: "colors", word: "rainbow" },
      { category: "colors", word: "tangerine" },
      { category: "food", word: "cornflakes" },
      { category: "food", word: "chocolate" },
      { category: "food", word: "blueberry" },
      { category: "food", word: "buckwheat" },
      { category: "food", word: "cauliflower" },
      { category: "weather", word: "chinook" },
      { category: "weather", word: "cumulonimbus" },
      { category: "weather", word: "hurricane" },
      { category: "weather", word: "precipitation" },
      { category: "weather", word: "whirlwind" },
    ],
  });

  const [guessWordsState, setGuessWordsState] = useState({
    guessWord: "",
  });

  const [selectedWordState, setSelectedWordState] = useState({
    selectedWord: { category: "", word: "" },
  });


  const guessWordHandler = () => {
    let selectedWord =
      wordsState.words[Math.floor(Math.random() * wordsState.words.length)];
    setSelectedWordState({
      selectedWord: {
        category: selectedWord.category,
        word: selectedWord.word,
      },
    });
    let guessWord = selectedWord.word.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "_");
    setGuessWordsState({
      guessWord: guessWord,
    });
  };

  return (
    <StyledDiv>
      <StyledHeader>
        <StyledImage>
        <img src="https://img.icons8.com/carbon-copy/200/000000/ms-word.png"/>        
        </StyledImage>
      </StyledHeader>
      <StyledInstruction>
        <StyledInstructionP>
        Survive!
        <br/>
        <br/>
        Guess the word before you run out of men!
        </StyledInstructionP>
      </StyledInstruction>
      <WordGenDiv>
      <h1>Word Generator</h1>
      <p>Original Word: {selectedWordState.selectedWord.word}</p>
      <p>Category: {selectedWordState.selectedWord.category} </p>
      <p>Guess the Word: {guessWordsState.guessWord} </p>
      <button onClick={guessWordHandler}>Generate</button>
      <br/>
      <br/>
      <br/>
      </WordGenDiv>
    </StyledDiv>
  );
};

export default WordGen;
