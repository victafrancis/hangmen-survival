import React, { useState } from "react";

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
    let guessWord = selectedWord.word.replace(/[bcdfghjklmnpqrstvwxys]/gi, "_");
    setGuessWordsState({
      guessWord: guessWord,
    });
  };

  return (
    <div>
      <h1>Word Genertor</h1>
      <p>Original Word: {selectedWordState.selectedWord.word}</p>
      <p>Category: {selectedWordState.selectedWord.category} </p>
      <p>Guess the Word: {guessWordsState.guessWord} </p>
      <button onClick={guessWordHandler}>Generate</button>
    </div>
  );
};

export default WordGen;
