import React from 'react';
import "./Display.css";
import WordleDisplay from "./WordleDisplay";



function Display (props) {


    let momdata = {
        squares: props.scoreObj.momsquares,
        score: props.scoreObj.momscore,
        time: props.scoreObj.momtime,
        text: props.scoreObj.fulltextmom,
        wordle: props.scoreObj.wordle,
    }

    let willdata = {
        squares: props.scoreObj.willsquares,
        score: props.scoreObj.willscore,
        time: props.scoreObj.willtime,
        text: props.scoreObj.fulltextwill,
        wordle: props.scoreObj.wordle,
    }


    //Generating the arrays of the text we want displayed
    const answer = props.scoreObj.solution;
    let willempties = [];
    let willwordle = Array(Math.min(willdata.score, 6)).fill([answer[0],answer[1],answer[2],answer[3],answer[4]]).flat();
    willempties = Array(6-(Math.min(willwordle.length/5, 6))).fill(["","","","",""]).flat(); 
    willwordle = willwordle.concat(willempties);
    
    let momempties = [];
    let momwordle = Array(Math.min(momdata.score, 6)).fill([answer[0],answer[1],answer[2],answer[3],answer[4]]).flat();
    momempties = Array(6-(Math.min(momwordle.length/5, 6))).fill(["","","","",""]).flat(); 
    momwordle = momwordle.concat(momempties);


    



    return (
        <div className="wordleBox">
           {props.visible ? (<><WordleDisplay
                letters = {momwordle}
                dataObj = {momdata}
            />
            <WordleDisplay 
                letters = {willwordle}  
                dataObj = {willdata} /></>) : null}
        </div>
    );
}

export default Display;