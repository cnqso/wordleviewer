import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Nav from './components/Nav';


//TODO
//Display date above the first message
//Change python code to represent emojis correctly in the JSON
//Make sure it is possible to scroll all the way to the bottom
//Implement Home, Analytics, and About pages
//Clean up all the pages, reorganize
//Give credit to all modules taken from or based on others

function App() {

  return (
    <div className="App">
      <Nav />
      <Gallery />
    </div>
  );
}

export default App;
