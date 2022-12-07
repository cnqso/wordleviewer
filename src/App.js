import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Nav from './components/Nav';




//Then, change the python string to output 012 instead of emojis
//After that it's pretty straight shooting. The button thing will be a pain in the ass tho
//Last, make the wordles reload upon a new selection




function App() {

  return (
    <div className="App">
      <Nav />
      <Gallery />
    </div>
  );
}

export default App;
