import React from 'react';
import './App.css';

import Keyboard from './Components/Keyboard/Keyboard';
import WordGenerator from './Components/WordGenerator/WordGenerator';
import LocalMatch from './Components/LocalMatch/LocalMatch'

function App() {
  return (
    <div>
      <LocalMatch />
    </div>
  );
}

export default App;
