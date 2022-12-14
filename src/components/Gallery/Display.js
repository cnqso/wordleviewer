import React from 'react';
import "./Display.css";
import WordleDisplay from "./WordleDisplay";
import {motion} from 'framer-motion';
import TextDisplay from './TextDisplay';
import Scores from '../../wordleScores.json';


function Display (props) {


    let momdata = {
        squares: props.scoreObj.momsquares,
        score: props.scoreObj.momscore,
        time: props.scoreObj.momtime,
        text: props.scoreObj.fulltextmom,
        wordle: props.scoreObj.wordle,
        winloss: "tie",
        reversesolution: props.scoreObj.momreversesolution
    }

    let willdata = {
        squares: props.scoreObj.willsquares,
        score: props.scoreObj.willscore,
        time: props.scoreObj.willtime,
        text: props.scoreObj.fulltextwill,
        wordle: props.scoreObj.wordle,
        winloss: "tie",
        reversesolution: props.scoreObj.willreversesolution
    }

    let willwordle = [];
    let momwordle = [];
    if (momdata.score != null && willdata.score != null) {
        willwordle = Array.from(willdata.reversesolution);
        momwordle = Array.from(momdata.reversesolution);
    } else {
        momwordle = Array(30).fill("");
        willwordle = momwordle;
    }


    if (momdata.score < willdata.score && momdata.score != null) {
        momdata.winloss = "win";
        willdata.winloss = "lose";
    } else if (momdata.score > willdata.score && willdata.score != null) {
        willdata.winloss = "win";
        momdata.winloss = "lose";
    } else if (momdata.score === null) {
        willdata.winloss = "win";
        willwordle = Array.from(willdata.reversesolution);
    } else if (willdata.score === null) {
        momdata.winloss = "win";
        momwordle = Array.from(momdata.reversesolution);
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