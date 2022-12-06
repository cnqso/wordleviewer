import React from 'react';
import "./WordleDisplay.css";




function WordleDisplay (props) {

  let letters = document.getElementsByClassName("wordle-char");
  let revealed = 0;
  const example = "012010120101201012010120101201012010120101201012010120101201"


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
    //let rand = props.dataObj.squares[rev];
    //console.log(props.dataObj.squares[rev]);
    let rand = example[rev]
    letters[rev].classList.remove(["blank", "green", "yellow"]);
  
    if (rand === "2") {
        letters[rev].classList.add("green");      
    }
    else if (rand === "1") {
        letters[rev].classList.add("yellow");
    }
    else if (rand === "0") {
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