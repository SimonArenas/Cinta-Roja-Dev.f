import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/jumbotron/Jumbotron';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
    </div>
  );
}

export default App;
