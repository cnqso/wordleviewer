import React, { useState, useRef, useEffect } from "react";
import {motion, AnimatePresence} from 'framer-motion';
import "./WordleDisplay.css";
import WordleChar from './WordleChar';







function WordleDisplay (props) {
  let letters = props.letters;
  let colors = props.dataObj.squares;
  let score = "";


function checkIfNull(playerScore) {
  if (playerScore === null) {
    letters = Array(30).fill([""]).flat();
    colors = "";
    score = "-";
  } else if (playerScore === 7) {
    score = "X"
  } else {
    score = props.dataObj.score.toString();
  }
}

let color = "B"
if (props.dataObj.winloss === "win") {
  color = "G"
} else if (props.dataObj.winloss === "lose"){
  color = "Y"
}


checkIfNull(props.dataObj.score);
const ref = useRef(null);

  return (
      <div>
        <div ref={ref} id="wrapper" className="wordledisplay">
          {letters.map((el, i) => 
            <WordleChar 
              key = {i}
              id = {i}
              letter= {el}
              color = {colors[i]}
              xposition = {i%5}
              yposition = {Math.floor(i/5)}
            />
          )}
          <div className="break"/> 
          {/* I have no idea why this works, but it centers the next 3 characters 
          without taking up a grid space. Adding more does nothing */}
          <br></br>
          <WordleChar 
            key = {1000}
            id = {1}
            letter = {score}  
            color = {color}
            xposition = {1}
            yposition = {7}
          />
          <WordleChar 
            key = {1001}
            id = {1}
            letter = {"/"}  
            color = {color}
            xposition = {2}
            yposition = {7}
          />
          <WordleChar 
            key = {1002}
            id = {1}
            letter = {"6"}  
            color = {color}
            xposition = {3}
            yposition = {7}
          />
        </div>
      {/* <div className="wordle-char" style={{color}}>{score}/6</div> */}

    </div>
  )
}



export default WordleDisplay;
