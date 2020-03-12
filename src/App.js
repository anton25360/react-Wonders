import React from 'react';
import './App.css';
import WonderCard from './components/WonderCard'

function App() {

  return (
    <div className="App">
      <h1>Wonders:</h1>
      <WonderCard name='wonder 1' location='india' imgLink='https://picsum.photos/300/200'/><br/>
      <WonderCard name='wonder 2' location='india' imgLink='https://picsum.photos/300/200'/><br/>
      <WonderCard name='wonder 3' location='india' imgLink='https://picsum.photos/300/200'/>
    </div>
  );
}

export default App;
