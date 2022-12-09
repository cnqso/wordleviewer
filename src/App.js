import React, {useState} from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Stats from './components/Stats/Stats';
import About from './components/About';
import Nav from './components/Nav';



//TODO
//Implement Home, Analytics, and About pages
//Clean up all the pages, reorganize
//Give credit to all modules taken from or based on others
//Big wordle-word-predictor module??

function App() {

  const [activeLink, setActiveLink] = useState('gallery');


  return (
    <div className="App">
      <Nav setActiveLink = {setActiveLink}/>
      {(activeLink === 'gallery') && <Gallery />}
      {(activeLink === 'stats') && <Stats />}
      {(activeLink === 'about') && <About />}
    </div>
  );
}

export default App;
