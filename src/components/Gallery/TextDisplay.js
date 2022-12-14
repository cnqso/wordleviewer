import React from 'react';
import './TextDisplay.css';
import Tooltip from '@mui/material/Tooltip';
import {motion} from 'framer-motion';

function TextDisplay(props) {
let top = "from-me";
let topyear = props.user2time;
let toptext = props.user2text;
let toptooltip = "left-start";
let bottom = "from-them";
let bottomyear = props.user1time;
let bottomtooltip="right-start";
let bottomtext=props.user1text;


if (props.user1time < props.user2time | props.user2time === null) {
    top="from-them";
    topyear = props.user1time;
    toptext=props.user1text;
    toptooltip="right-start";
    bottom="from-me";
    bottomyear = props.user2time;
    bottomtooltip="left-start";
    bottomtext=props.user2text;
}
if (props.user1time === null) {
    top = "from-me";
    topyear = props.user2time;
    toptext = props.user2text;
    toptooltip = "left-start";
    bottom = "from-them";
    bottomyear = props.user1time;
    bottomtext=props.user1text;
    bottomtooltip="right-start";
}

function twoMessages () {
    if (props.user2time === null | props.user1time === null) {
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

  


    return (

    <motion.div key={props.user2text} initial={{opacity:0, y:200}} animate={{opacity: 1, y:0}} transition={{duration:0.5}}className="imessage" style={styles.imessage}> 
        <Tooltip key={props.user2time}
            title={<p style={{fontSize: "calc(1.2vmin + 1vw)"}}>{unixTimeToDateString(topyear)}</p>} 
            placement={toptooltip}>
                <p className={top}>{toptext}</p>
        </Tooltip>
        {twoMessages() && <Tooltip
            title={<p style={{fontSize: "calc(1.2vmin + 1vw)"}}>{unixTimeToDateString(bottomyear)}</p>} 
            placement={bottomtooltip}>
                <p className={bottom}>{bottomtext}</p>
        </Tooltip>}
    </motion.div>
    );
}

export default TextDisplay;