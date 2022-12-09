import React, {useState} from 'react';
import './Gallery.css';
import Display from './Display';
import Scroller from './Scroller';
import Scores from '../../wordleScores.json';

function Gallery () {
    const [showDisplay, setShowDisplay] = useState(true);
    const [currentSelection, setCurrentSelection] = useState(Scores[0]); 
    const receiveScoresHandler = (event) => {
        setCurrentSelection(event);
        //setShowDisplay(!showDisplay);
    }


    return (
        <div className="gallery">
            <Scroller
                selection = {currentSelection.wordle}   
                onChange = {receiveScoresHandler}
            />
            <Display
                key = {currentSelection}
                scoreObj = {currentSelection}
                visible = {showDisplay}
            />
        </div>
    );
}



export default Gallery;