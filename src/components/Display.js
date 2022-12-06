import React from 'react';
import "./Display.css";
import WordleDisplay from "./WordleDisplay";



function Display (props) {


    const momdata = {
        squares: props.scoreObj.momsquares,
        score: props.scoreObj.momscore,
        time: props.scoreObj.momtime,
        text: props.scoreObj.momfulltext,
        wordle: props.scoreObj.wordle


    }


    const willwordle = ["K", "E", "L", "L", "Y", 
                        "K", "E", "L", "L", "Y", 
                        "K", "E", "L", "L", "Y",
                        "K", "E", "L", "L", "Y",
                        "K", "E", "L", "L", "Y",
                        "K", "E", "L", "L", "Y"];

    const momwordle =  ["K", "E", "L", "L", "Y", 
                        "K", "E", "L", "L", "Y", 
                        "K", "E", "L", "L", "Y",];

    return (
    <div className="wordleBox">
        <WordleDisplay
            data = {momwordle}
            dataObj = {momdata}
        />
        <WordleDisplay 
            data = {willwordle}  
            dataObj = {momdata}
              
        />
    </div>
    );
}

export default Display;