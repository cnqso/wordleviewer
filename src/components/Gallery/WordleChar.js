import React from "react";
import {motion, AnimatePresence} from 'framer-motion';
import './WordleChar.css';


function WordleChar (props) {
    let id=props.id;
    let letter=props.letter ;
    let color=props.color;
    let xposition=props.xposition;
    let yposition=props.yposition;
  
  
  
    return (
      <AnimatePresence>
        {(id === props.id)} && (
        <motion.span
          initial={{ scaleY:0}}
          animate={{ scaleY: 1}}
          exit={{scaleY: 0}}
          transition = {{duration: 0.2, delay: xposition*0.03+yposition*0.08}}
          //transition = {{duration: 0.2, delay: yposition*0.15}} <- this is closer to original wordle
          // Unecessary but fun- might include in final build
          // drag
          // dragConstraints={{
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          // }}
          className={color}> 
            {letter} 
        </motion.span>
        )
      </AnimatePresence>
    );
  }

  export default WordleChar;