import React, { useState, useRef, useEffect } from "react";
import {motion, AnimatePresence} from 'framer-motion';
import "./WordleDisplay.css";
import './WordleChar.css';



//Animation on the way out that squishes- animation on the way in that expands
function WordleChar (props) {
  let id=props.id;
  let letter=props.letter ;
  let color=props.color;
  let xposition=props.xposition;
  let yposition=props.yposition;



  return (
    <AnimatePresence>
      {(id === props.id)} && (
      <motion.span layout
        initial={{ scaleY:0}}
        animate={{ scaleY: 1}}
        exit={{scaleY: 0}}
        transition = {{duration: 0.2, delay: xposition*0.03+yposition*0.08}}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className={color}> 
          {letter} 
      </motion.span>
      )
    </AnimatePresence>
  );
}



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


