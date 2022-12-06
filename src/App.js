import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Nav from './components/Nav';

//const initSqlJs = require('./sql.js');






function App() {

  return (
    <div className="App">
      <Nav />
      <Gallery />
    </div>
  );
}

export default App;
