import React from 'react';
import './App.css';
import WonderCard from './components/WonderCard'
import IntroCard from './components/IntroCard'

//background images
import taj from './res/taj.jpg';
import colosseum from './res/colosseum.jpg';
import chichen from './res/chichen.jpg';
import machu from './res/machu.jpg';
import christ from './res/christ.jpg';
import petra from './res/petra.jpg';
import great from './res/great.jpg';

function App() {

  let content = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
  ]

  return (
    <div className="App">
      <IntroCard /><br/>
      <WonderCard name='Taj Mahal' location='India' imgLink={taj} info={content[0]}/><br/>
      <WonderCard name='Colosseum' location='Italy' imgLink={colosseum} info={content[1]}/><br/>
      <WonderCard name='Chichen Itza' location='Mexico' imgLink={chichen} info={content[2]}/><br/>
      <WonderCard name='Machu Picchu' location='Peru' imgLink={machu} info={content[3]}/><br/>
      <WonderCard name='Christ the Redeemer' location='Brazil' imgLink={christ} info={content[4]}/><br/>
      <WonderCard name='Petra' location='Jordan' imgLink={petra} info={content[5]}/><br/>
      <WonderCard name='Great Wall of China' location='China' imgLink={great} info={content[6]}/>
    </div>
  );
}

export default App;
