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
    'The Taj Mahal is world-renowned for its historical value, its tale of love, and its stunning beauty. It houses the tomb of Mumtaz Mahal, the wife of the Mughal Emperor Shah Jahan. It is said that the Emperor loved his wife dearly and was prompted to build the Taj Mahal after her death as a testament to his love. The construction of the Taj Mahal was completed by 1632, and declared a UNESCO World Heritage Site in 1983 (351 years later).',
    'The Colosseum is the world\'s biggest amphitheater (80k capacity), located in the center of Rome. Mock sea battles, animal hunts, famous battle re-enactments, executions, and mythological dramas were just some of the public spectacles held at the Colosseum. Today, this wonder of the world is a popular tourist attraction and serves as the iconic symbol of Imperial Rome.',
    'Chichen Itza is an archaeological site located in Mexico’s Yucatán State. It is a pre-Columbian city that was built during the Terminal Classic period by the Maya people. Chichen Itza is believed to have been one of the major cities of the ancient Mayan world and constructions in the city exhibit a variety of architectural styles.',
    'According to the majority of archaeologists, the Inca emperor Pachacuti built Machu Picchu as an estate around the year 1450. The site developed as a city but was abandoned a century later during the Spanish Conquest. The site remained largely unknown to the rest of the world until its discovery by the American explorer Hiram Bingham.',
    'One of Brazil\'s most iconic symbols, Christ the Redeemer is 98 feet tall and has a 26-feet tall pedestal. Its arms stretch 92 feet wide. The 635 metric ton statue, made of soapstone and concrete, is located atop the 2,300 feet tall Corcovado mountain.',
    'Petra has immense archaeological, historical, and architectural value that makes it a jaw-dropping tourist attraction. The water conduit system and the rock-cut architecture are the two most notable features of this ancient city. Petra is also nicknamed as the “Rose City” due to the stone color from which it is carved.',
    'The Great Wall of China, a global tourist hotspot, is known across the world for its uniqueness, great length, and historical value. A series of walls were initially built by Chinese empires and states over a period of many years, beginning as early as the 7th century BCE. These walls were then joined together to result in the Great Wall of China.'
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
