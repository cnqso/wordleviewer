import React from 'react';
import './TextDisplay.css';
import Tooltip from '@mui/material/Tooltip';

function TextDisplay(props) {
let top = "from-me";
let topyear = props.willtime;
let bottom = "from-them";
let bottomyear = props.momtime;
let toptext = props.willtext;
let bottomtext=props.momtext;


if (props.momtime < props.willtime | props.willtime === null) {
    top="from-them";
    topyear = props.momtime;
    toptext=props.momtext;
    bottom="from-me";
    bottomyear = props.willtime;
    bottomtext=props.willtext;
}
if (props.momtime === null) {
    top = "from-me";
    topyear = props.willtime;
    bottom = "from-them";
    toptext = props.willtext;
    bottomyear = props.momtime;
    bottomtext=props.momtext;
}

function twoMessages () {
    if (props.willtime === null | props.momtime === null) {
        return false;
    }
    return true;
}

const styles = {
    imessage: {
        whiteSpace: "pre-wrap"
    }
};
function unixTimeToDateString(CFTime) {
    // Create a date object from the Unix time
    let unixTime = (CFTime / 1000000000) + 978307200;
    let date = new Date(unixTime * 1000);
  
    // Format the date as a string in the desired format
    let dateString = date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  
    // Return the formatted date string
    return dateString;
  }
let momyear = unixTimeToDateString(props.momtime);



    return (
<div className="imessage" style={styles.imessage}>
<Tooltip 
    title={<p style={{fontSize: "calc(1.2vmin + 1vw)"}}>{unixTimeToDateString(topyear)}</p>} 
    placement="right-start">
    
    
    <p className={top}>{toptext}</p></Tooltip>
   {twoMessages() && 
   <Tooltip 
    title={<p style={{fontSize: "calc(1.2vmin + 1vw)"}}>{unixTimeToDateString(bottomyear)}</p>} 
    placement="left-start">
   <p className={bottom}>{bottomtext}</p></Tooltip>}
    </div>
    );
}

export default TextDisplay;