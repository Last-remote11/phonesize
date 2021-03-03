import React, { useState } from 'react';
import './App.css';
import Navigation from './Navigation'
import Slide from './Slide'
import Container from './Container'
import Selector from './Selector'
import { Database } from './Database'

const App = () => {

  const [phone1, setPhone1] = useState(['AIP11PM', 'AIP11PM', 'AIP11PM'])
  // const [phone2, setPhone2] = useState(null)
  // const [phone3, setPhone3] = useState(null)

  const [realSize, setRealSize] = useState(50)

  const adjustSize = (newValue) => {
    setRealSize(newValue);
    console.log(realSize)
  };

  const phoneChange = (n) => (value) => {
    for (var i=0; i < Database.length; i++) {
      if (Database[i].id = value) {
        setPhone(oldArray => {
          oldArray[n] = value
        })
      }
    }
  }

  const sample = Database[0].id

  return (
    <div className="App">
      <Navigation/>
      <Selector Database={Database}/>
      <Selector Database={Database}/>
      <Selector Database={Database}/>
      <Slide adjustSize={adjustSize}/>
      <Container realSize={realSize}>
        <h1>{sample}</h1>
      </Container>         
    </div>
  );
}

export default App;
