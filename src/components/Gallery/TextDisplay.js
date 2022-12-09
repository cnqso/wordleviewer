import React from 'react';
import './TextDisplay.css';
import Tooltip from '@mui/material/Tooltip';
import {motion} from 'framer-motion';

function TextDisplay(props) {
let top = "from-me";
let topyear = props.willtime;
let toptext = props.willtext;
let toptooltip = "left-start";
let bottom = "from-them";
let bottomyear = props.momtime;
let bottomtooltip="right-start";
let bottomtext=props.momtext;


if (props.momtime < props.willtime | props.willtime === null) {
    top="from-them";
    topyear = props.momtime;
    toptext=props.momtext;
    toptooltip="right-start";
    bottom="from-me";
    bottomyear = props.willtime;
    bottomtooltip="left-start";
    bottomtext=props.willtext;
}
if (props.momtime === null) {
    top = "from-me";
    topyear = props.willtime;
    toptext = props.willtext;
    toptooltip = "left-start";
    bottom = "from-them";
    bottomyear = props.momtime;
    bottomtext=props.momtext;
    bottomtooltip="right-start";
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

  


    return (

    <motion.div key={props.willtext} initial={{opacity:0, y:200}} animate={{opacity: 1, y:0}} transition={{duration:0.5}}className="imessage" style={styles.imessage}> 
        <Tooltip key={props.willtime}
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