import React from 'react';
import './App.css';
import WonderCard from './components/WonderCard'

function App() {
  return (
    <div className="App">
      <h1>Wonders:</h1>
      <WonderCard/>
      <WonderCard/>
      <WonderCard/>
    </div>
  );
}

export default App;
