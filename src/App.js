import React from 'react';
import './App.css';
import WonderCard from './components/WonderCard'

function App() {

  return (
    <div className="App">
      <h1>Wonders:</h1>
      <WonderCard name='wonder 1' dateBuilt='2001' imgLink='https://picsum.photos/200'/>
      <WonderCard name='wonder 2' dateBuilt='2001' imgLink='https://picsum.photos/200'/>
      <WonderCard name='wonder 3' dateBuilt='2001' imgLink='https://picsum.photos/200'/>
    </div>
  );
}

export default App;
