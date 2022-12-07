import React, { useState, useRef, useEffect } from "react";
import { spring, Motion, presets } from "react-motion";
import ReactCSSTransitionGroup from 'react-transition-group';
import './WordleChar.css';


function WordleChar (props) {
    
    const styles = {
		opacity: spring(1 ? 1 : 0, presets.stiff),
		scale: spring(1 ? 1 : 0.8, presets.wobbly),
	};

    let id=props.id;
    let letter=props.letter ;
    let color=props.color;
    let xposition=props.xposition;
    let yposition=props.yposition;

    return (
        <span className={color}>
            
            {letter}
        </span>
    );
}





export default WordleChar;






