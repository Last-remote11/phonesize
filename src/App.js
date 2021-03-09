import React, { useState, useCallback } from 'react';
import './App.css';
import Navigation from './Navigation'
import Slide from './Slide'
import Container from './Container'
import Selector from './Selector'
import PhoneImgs from './PhoneImgs'
import { Database } from './Database'

import CreditCard from './imgs/CreditCard.png'

const App = () => {

  const [phone1, ] = useState(['AIP11PM', 'AIP11PM', 'AIP11PM'])
  // const [phone2, setPhone2] = useState(null)
  // const [phone3, setPhone3] = useState(null)


  const [realSize, setRealSize] = useState(50)

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);



  const phoneChange = (n) => (event) => {
    for (var i=0; i < Database.length; i++) {
      if (Database[i].id === event.target.value) {
        // setPhone1(oldArray => {
        //   oldArray[n] = Database[i]
        //   console.log(Database[i])
        //   console.log(event.target.value)
        //   console.log(oldArray)
        // return oldArray
        phone1[n] = Database[i]
        forceUpdate()
        return
        
      }
    }
  }


  return (
    <div className="App">
      <Navigation/>
      <Selector Database={Database} phoneChange={phoneChange(0)}/>
      <Selector Database={Database} phoneChange={phoneChange(1)}/>
      <Selector Database={Database} phoneChange={phoneChange(2)}/>
      
      <Slide adjustSize={setRealSize}/>
      <Container realSize={realSize}>
        <img className='creditCard' alt='fail' src={CreditCard} width={85.6*(realSize/10)} height={53.98*(realSize/10)}></img>
        <PhoneImgs array={phone1} realSize={realSize}/>
      </Container>         
    </div>
  );
}

export default App;
