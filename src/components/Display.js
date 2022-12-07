import React from 'react';
import "./Display.css";
import WordleDisplay from "./WordleDisplay";



function Display (props) {

    const totalLengthCalc = (props.scoreObj.momscore * 5) + (props.scoreObj.willscore * 5)

    const momdata = {
        squares: props.scoreObj.momsquares,
        score: props.scoreObj.momscore,
        time: props.scoreObj.momtime,
        text: props.scoreObj.momfulltext,
        wordle: props.scoreObj.wordle,
        totalLength: totalLengthCalc,
        location: "wordle-char1"
    }

    const willdata = {
        squares: props.scoreObj.willsquares,
        score: props.scoreObj.willscore,
        time: props.scoreObj.willtime,
        text: props.scoreObj.willfulltext,
        wordle: props.scoreObj.wordle,
        totalLength: totalLengthCalc,
        location: "wordle-char2"
    }


    
    const answer = props.scoreObj.solution;
    const willwordle = Array(willdata.score).fill([answer[0],answer[1],answer[2],answer[3],answer[4]]).flat();
    const momwordle = Array(momdata.score).fill([answer[0],answer[1],answer[2],answer[3],answer[4]]).flat();

    return (
    <div className="wordleBox">
        <WordleDisplay
            data = {momwordle}
            dataObj = {momdata}
        />
        <WordleDisplay 
            data = {willwordle}  
            dataObj = {willdata}
              
        />
    </div>
    );
}

export default Display;