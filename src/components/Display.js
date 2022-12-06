import React from 'react';
import "./Display.css";
import WordleDisplay from "./WordleDisplay";



function Display () {

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

    <div className="boxy">
        <WordleDisplay data = {momwordle}/>
        <WordleDisplay data = {willwordle}/>
    </div>
    );
}

export default Display;