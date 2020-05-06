import React from 'react';
import './App.css';

import Keyboard from './Components/Keyboard/Keyboard';
import WordGenerator from './Components/WordGenerator/WordGenerator';

function App() {
  return (
    <div>
      <WordGenerator/>
      <Keyboard />
    </div>
  );
}

export default App;
