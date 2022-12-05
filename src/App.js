import React from 'react';
import './App.css';
import Scroller from './components/Scroller';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {


  return (
    <div className="App">

      <Nav />
      <div>
      <Scroller />
      <Gallery />
      </div>
      
    </div>
  );
}

export default App;
