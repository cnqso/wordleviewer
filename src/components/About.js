import React from 'react';
import './About.css';

const LoremIpsumPage = () => {
  return (
    <div className = "about">
        <main>
            <p className="left"> <a style={{color: "#d0ffcc"}} href="https://github.com/cnqso/wordleviewer">About</a></p>
            <p className="right">
                This website is a Christmas gift. It receives 
                an iPhone backup and displays all sent or 
                received Wordle scores found in one text conversation. 
                The display is built with React, and the "backend" 
                is a Python script with SQLite and JSON libraries.<br/>
                {/* <a style={{color: "#d0ffcc"}} href="https://github.com/cnqso"> Github</a><a style={{color: "#d0ffcc"}} href="https://twitter.com/cnqso"> Twitter</a><a style={{color: "#d0ffcc"}} href="https://github.com/cnqso"> Codepen</a><a style={{color: "#d0ffcc"}} href="mailto:WiMiKelly@gmail.com"> Email</a>
                 */}
                

            </p>
        </main>
    </div>
  );
};

export default LoremIpsumPage;