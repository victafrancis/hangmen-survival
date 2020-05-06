import React, { useState, useEffect } from 'react';
import './LocalMatch.css';
import WOrdGenerator from '../WordGenerator/WordGenerator';
import Keyboard from '../Keyboard/Keyboard'

const LocalMatch = (props) => {


  return (
    <>
      <WOrdGenerator />
      <Keyboard />
    </>
  );
};

export default LocalMatch;