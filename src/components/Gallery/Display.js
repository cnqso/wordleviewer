import React from 'react';
import "./Display.css";
import WordleDisplay from "./WordleDisplay";
import TextDisplay from './TextDisplay';


function Display (props) {


    let user1data = {
        squares: props.scoreObj.user1squares,
        score: props.scoreObj.user1score,
        time: props.scoreObj.user1time,
        text: props.scoreObj.fulltextuser1,
        wordle: props.scoreObj.wordle,
        winloss: "tie",
        reversesolution: props.scoreObj.user1reversesolution
    }

    let user2data = {
        squares: props.scoreObj.user2squares,
        score: props.scoreObj.user2score,
        time: props.scoreObj.user2time,
        text: props.scoreObj.fulltextuser2,
        wordle: props.scoreObj.wordle,
        winloss: "tie",
        reversesolution: props.scoreObj.user2reversesolution
    }
    let user1wordle = [];
    let user2wordle = [];
    
    if (user1data.score != null && user2data.score != null) {
        user2wordle = Array.from(user2data.reversesolution);
        user1wordle = Array.from(user1data.reversesolution);
    } else {
        user1wordle = Array(30).fill("");
        user2wordle = user1wordle;
    }


    if (user1data.score < user2data.score && user1data.score != null) {
        user1data.winloss = "win";
        user2data.winloss = "lose";
    } else if (user1data.score > user2data.score && user2data.score != null) {
        user2data.winloss = "win";
        user1data.winloss = "lose";
    } else if (user1data.score === null) {
        user2data.winloss = "win";
        user2wordle = Array.from(user2data.reversesolution);
    } else if (user2data.score === null) {
        user1data.winloss = "win";
        user1wordle = Array.from(user1data.reversesolution);
    }


    return (
        <div className="wordleBox">
            <div id="nohighlight" className="title">Wordle #{props.scoreObj.wordle}</div>
            <WordleDisplay
                key = {props.scoreObj.wordle}
                letters = {user1wordle}
                dataObj = {user1data}
            />
            <WordleDisplay 
                key = {props.scoreObj.wordle*2}
                letters = {user2wordle}  
                dataObj = {user2data} 
             />
            <TextDisplay
                user1time = {user1data.time}
                user2time = {user2data.time}
                user1text = {user1data.text}
                user2text = {user2data.text}
            />
            {/* <br style={{margin: "250px"}}></br> */}
        </div>
    );
}

export default Display;