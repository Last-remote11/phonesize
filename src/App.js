import React, { useState } from 'react';
import './App.css';
import Navigation from './Navigation'
import Slide from './Slide'
import Container from './Container'
import { Database } from './Database'

const App = () => {

  // const [phone1, setPhone1] = useState('AIP11PM')
  // const [phone2, setPhone2] = useState(null)
  // const [phone3, setPhone3] = useState(null)

  const [realSize, setRealSize] = useState(50)

  const adjustSize = (newValue) => {
    setRealSize(newValue);
    console.log(realSize)
  };

  const hello = Database[0].id

  return (
    <div className="App">
      <Navigation/>
      <Slide adjustSize={adjustSize}/>
      <Container realSize={realSize}>
        {hello}
      </Container>         
    </div>
  );
}

export default App;
