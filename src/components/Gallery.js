import React from 'react';
import './Gallery.css';
import Display from './Display';
import Scroller from './Scroller';

function Gallery () {
    return (
        <div class="gallery">
            <Scroller/>
            <Display/>
        </div>
    );
}



export default Gallery;