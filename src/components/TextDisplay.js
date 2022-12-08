import React from 'react';
import './TextDisplay.css';

function TextDisplay(props) {
let top = "from-me";
let bottom = "from-them";
let toptext = props.willtext;
let bottomtext=props.momtext;

if (props.momtime < props.willtime | props.willtime === null) {
    top="from-them";
    toptext=props.momtext;
    bottom="from-me";
    bottomtext=props.willtext;
}

function twoMessages () {
    if (props.willtime === null | props.momtime === null) {
        return false;
    }
    return true;
}


    return (
<div class="imessage">
    <p className={top}>{toptext}</p>
   {twoMessages() && <p className={bottom}>{bottomtext}</p>}
    </div>
    );
}

export default TextDisplay;