import React from 'react';
import "./WordleDisplay.css";



let letters = document.getElementsByClassName("wordle-char");
let revealed = 0;


function Begin() {
  setTimeout(Reveal, 150);
}

function Reveal() {
    letters[revealed].classList.add("reveal"); 
    let temp = revealed;
    setTimeout(() => UpdateColor(temp, letters), 250);
    revealed += 1;
    console.log(revealed);
     
    if (revealed >= letters.length) return;
    
    Begin();  
  }


  function UpdateColor(rev, letters) {
    let rand = Math.floor(Math.random() * 3);
    console.log(rand);
    letters[rev].classList.remove(["blank", "green", "yellow"]);
  
    if (rand === 0) {
        letters[rev].classList.add("green");      
    }
    else if (rand === 1) {
        letters[rev].classList.add("yellow");
    }
    else if (rand === 2) {
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

function WordleDisplay () {
    Begin();
    return (
        <div>
            <div class="wordledisplay" onClick={Begin}>
            <span class="wordle-char .reveal">K</span>
            <span class="wordle-char .reveal ">E</span>
            <span class="wordle-char ">L</span>
            <span class="wordle-char  ">L</span>
            <span class="wordle-char ">Y</span>
            <span class="wordle-char ">K</span>
            <span class="wordle-char ">E</span>
            <span class="wordle-char ">L</span>
            <span class="wordle-char  ">L</span>
            <span class="wordle-char ">Y</span>
        </div>
        </div>
    )
}

export default WordleDisplay;