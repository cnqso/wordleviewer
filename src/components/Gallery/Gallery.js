import React, {useState} from 'react';
import './Gallery.css';
import Display from './Display';
import Scroller from './Scroller';
import Scores from '../../wordleScores.json';

function Gallery () {
    const [currentSelection, setCurrentSelection] = useState(Scores[0]); 
    const receiveScoresHandler = (event) => {
        setCurrentSelection(event);
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
            />
        </div>
    );
}



export default Gallery;