import React, { useState, useRef, useEffect } from "react";
import { spring, Motion, presets } from "react-motion";
import {motion} from 'framer-motion';
//import ReactCSSTransitionGroup from 'react-transition-group';
import './WordleChar.css';


function WordleChar (props) {
    // const [squareProperties, setX] = useState(""); 
    // // const receiveXHandler = (event) => {
    // //     setX(event);
    // // }

    let id=props.id;
    let letter=props.letter ;
    let color=props.color;
    let xposition=props.xposition;
    let yposition=props.yposition;
    console.log(squareProperties);

    return (
        <motion.span layout
        animate={{
            scaleY: [null, 0.02, 1]
          }}
            className={color}> 
            {squareProperties} 
        </motion.span>
    );
}





export default WordleChar;




