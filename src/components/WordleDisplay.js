import React from 'react';
import "./WordleDisplay.css";

// Make all wordle characters into seperate objects
// Give props (Letter, Color, X axis, Y axis)
// Rather than reloading all at once, send update message to each individually
// Color + letter change occurs at point of y-axis=0, ezpz
// Bottom ones are maybe always generated but are blank/invisible. Might make it look cleaner
// Generate 4 arrays of all the stuff I want, do a map that is like props.squareColors.map(el, i) => 
// <Square key: {i} color: {colors[i]} letter: {letters[i]} etc etc


function WordleDisplay (props) {

  let letters = document.getElementsByClassName("wordle-char");
  let revealed = 0;


function Begin() {
  setTimeout(Reveal, 100);
}

function Reveal() {
    letters[revealed].classList.add("reveal"); 
    let temp = revealed;
    setTimeout(() => UpdateColor(temp, letters), 250);
    revealed += 1;
     
    if (revealed >= letters.length) return;
    Begin();  
  }


  function UpdateColor(rev, letters) {
    let rand = props.dataObj.squares[rev];
    letters[rev].classList.remove(["blank", "green", "yellow"]);
  
    if (rand === "G") {
        letters[rev].classList.add("green");      
    }
    else if (rand === "Y") {
        letters[rev].classList.add("yellow");
    }
    else if (rand === "B") {
        letters[rev].classList.add("blank");
    }
  } 
  
  function Reset() {
    revealed = 0;
    Begin();
    for (let i = 0; i < letters.length; i++) {
        letters[i].classList.remove("reveal");
        letters[i].classList.remove("green");
        letters[i].classList.remove("yellow");
        letters[i].classList.remove("blank");
    }
  }


  Begin();
    return (
        <div>
            <div id="wrapper" className="wordledisplay">
              {props.data.map((el, i) => <span key={i} onClick={Begin} id={el} className="wordle-char">{el}</span>)}
      </div>
      <div>Wordle #{props.dataObj.wordle}</div>
      </div>
    )
}

export default WordleDisplay;