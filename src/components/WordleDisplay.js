import React, { useState, useRef } from 'react';
import "./WordleDisplay.css";
import WordleChar from './WordleChar';

// Make all wordle characters into seperate objects
// Give props (Letter, Color, X axis, Y axis)
// Rather than reloading all at once, send update message to each individually
// Color + letter change occurs at point of y-axis=0, ezpz
// Bottom ones are maybe always generated but are blank/invisible. Might make it look cleaner
// Generate 4 arrays of all the stuff I want, do a map that is like props.squareColors.map(el, i) => 
// <Square key: {i} color: {colors[i]} letter: {letters[i]} etc etc

//Animation on the way out that squishes- animation on the way in that expands


function WordleDisplay (props) {
  let letters = props.letters;
  let colors = props.dataObj.squares;
  let score = "";

//   let letters = document.getElementsByClassName("wordle-char");
//   let revealed = 0;


// function Begin() {
//   setTimeout(Reveal, 100);
// }

// function Reveal() {
//     letters[revealed].classList.add("reveal"); 
//     let temp = revealed;
//     setTimeout(() => UpdateColor(temp, letters), 250);
//     revealed += 1;
     
//     if (revealed >= letters.length) return;
//     Begin();  
//   }


//   function UpdateColor(rev, letters) {
//     let rand = props.dataObj.squares[rev];
//     letters[rev].classList.remove(["blank", "green", "yellow"]);
  
//     if (rand === "G") {
//         letters[rev].classList.add("green");      
//     }
//     else if (rand === "Y") {
//         letters[rev].classList.add("yellow");
//     }
//     else if (rand === "B") {
//         letters[rev].classList.add("blank");
//     }
//   } 
  
//   function Reset() {
//     revealed = 0;
//     Begin();
//     for (let i = 0; i < letters.length; i++) {
//         letters[i].classList.remove("reveal");
//         letters[i].classList.remove("green");
//         letters[i].classList.remove("yellow");
//         letters[i].classList.remove("blank");
//     }
//   }
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

checkIfNull(props.dataObj.score);
const ref = useRef(null);
  return (
      <div>
        <div ref={ref} id="wrapper" className="wordledisplay">
          {letters.map((el, i) => 
            <WordleChar 
              key = {i}
              root = {ref}
              id = {i}
              letter= {el}
              color = {colors[i]}
              xposition = {i%5}
              yposition = {Math.floor(i/5)}
            />
          )}
        </div>
      <div>{score}/6</div>
    </div>
  )
}



export default WordleDisplay;