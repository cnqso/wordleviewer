import React from 'react';
import "./Display.css";
import WordleDisplay from "./WordleDisplay";
import {motion} from 'framer-motion';
import TextDisplay from './TextDisplay'


function Display (props) {


    let momdata = {
        squares: props.scoreObj.momsquares,
        score: props.scoreObj.momscore,
        time: props.scoreObj.momtime,
        text: props.scoreObj.fulltextmom,
        wordle: props.scoreObj.wordle,
        winloss: "tie"
    }

    let willdata = {
        squares: props.scoreObj.willsquares,
        score: props.scoreObj.willscore,
        time: props.scoreObj.willtime,
        text: props.scoreObj.fulltextwill,
        wordle: props.scoreObj.wordle,
        winloss: "tie"
    }


    //Generating the arrays of the text we want displayed.
    //For scored squares, we want text, otherwise we want a "" entry in the array.
    //We do the calculations here because the WordleDisplay modules have a lot of
    //animations to run, so we want to frontload as much math as we can.
    const answer = props.scoreObj.solution;
    let willempties = [];
    //Create an array of 5 letters repeated x times, x being the player's score
    let willwordle = Array(Math.min(willdata.score, 6)).fill([answer[0],answer[1],answer[2],answer[3],answer[4]]).flat();
    //Same thing, but this time x is (6 - the players score)
    willempties = Array(6-(Math.min(willwordle.length/5, 6))).fill(["","","","",""]).flat(); 
    //Join them together
    willwordle = willwordle.concat(willempties);
    
    //Then do it again
    let momempties = [];
    let momwordle = Array(Math.min(momdata.score, 6)).fill([answer[0],answer[1],answer[2],answer[3],answer[4]]).flat();
    momempties = Array(6-(Math.min(momwordle.length/5, 6))).fill(["","","","",""]).flat(); 
    momwordle = momwordle.concat(momempties);

    if (momdata.score < willdata.score && momdata.score != null) {
        momdata.winloss = "win";
        willdata.winloss = "lose";
    } else if (momdata.score > willdata.score && willdata.score != null) {
        willdata.winloss = "win";
        momdata.winloss = "lose";
    } else if (momdata.score === null) {
        willdata.winloss = "win";
    } else if (willdata.score === null) {
        momdata.winloss = "win";
    }



    return (
        <div className="wordleBox">
            <div id="nohighlight" className="title">Wordle #{props.scoreObj.wordle}</div>
            <WordleDisplay
                key = {props.scoreObj.wordle}
                letters = {momwordle}
                dataObj = {momdata}
            />
            <WordleDisplay 
                key = {props.scoreObj.wordle*2}
                letters = {willwordle}  
                dataObj = {willdata} 
             />
            <TextDisplay
                momtime = {momdata.time}
                willtime = {willdata.time}
                momtext = {momdata.text}
                willtext = {willdata.text}
            />
            {/* <br style={{margin: "250px"}}></br> */}
        </div>
    );
}

export default Display;