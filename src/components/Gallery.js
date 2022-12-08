import React, {useState} from 'react';
import './Gallery.css';
import Display from './Display';
import Scroller from './Scroller';
import Scores from '../scores.json';

function Gallery () {
    const [showDisplay, setShowDisplay] = useState(true);
    const [currentSelection, setCurrentSelection] = useState(Scores[0]); 
    const receiveScoresHandler = (event) => {
        setCurrentSelection(event);
        //setShowDisplay(!showDisplay);
    }

//Check out useEffect because that might be the key
//Otherwise lock the vw of the scrollbar

    return (
        <div className="gallery">
            <Scroller
                selection = {currentSelection.wordle}   
                onChange = {receiveScoresHandler}
            />
            <Display
                scoreObj = {currentSelection}
                visible = {showDisplay}
            />
        </div>
    );
}



export default Gallery;