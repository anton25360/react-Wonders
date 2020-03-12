import React from 'react';
import './App.css';
import WonderCard from './components/WonderCard'

//background images
import taj from './res/taj.jpg';
import colosseum from './res/colosseum.jpg';
import chichen from './res/chichen.jpg';
import machu from './res/machu.jpg';
import christ from './res/christ.jpg';
import petra from './res/petra.jpg';
import great from './res/great.jpg';

function App() {

  return (
    <div className="App">
      <h1>Wonders:</h1>
      <WonderCard name='Taj Mahal' location='India' imgLink={taj}/><br/>
      <WonderCard name='Colosseum' location='Italy' imgLink={colosseum}/><br/>
      <WonderCard name='Chichen Itza' location='Mexico' imgLink={chichen}/><br/>
      <WonderCard name='Machu Picchu' location='Peru' imgLink={machu}/><br/>
      <WonderCard name='Christ the Redeemer' location='Brazil' imgLink={christ}/><br/>
      <WonderCard name='Petra' location='Jordan' imgLink={petra}/><br/>
      <WonderCard name='Great Wall of China' location='China' imgLink={great}/>
    </div>
  );
}

export default App;
