import React from 'react';
import './App.css';
import WonderCard from './components/WonderCard'

function App() {

  return (
    <div className="App">
      <h1>Wonders:</h1>
      <WonderCard name='Taj Mahal' location='India' imgLink='https://picsum.photos/300/200'/><br/>
      <WonderCard name='Colosseum' location='Italy' imgLink='https://picsum.photos/300/200'/><br/>
      <WonderCard name='Chichen Itza' location='Mexico' imgLink='https://picsum.photos/300/200'/><br/>
      <WonderCard name='Machu Picchu' location='Peru' imgLink='https://picsum.photos/300/200'/><br/>
      <WonderCard name='Christ the Redeemer' location='Brazil' imgLink='https://picsum.photos/300/200'/><br/>
      <WonderCard name='Petra' location='Jordan' imgLink='https://picsum.photos/300/200'/><br/>
      <WonderCard name='Great Wall of China' location='China' imgLink='https://picsum.photos/300/200'/>
    </div>
  );
}

export default App;
