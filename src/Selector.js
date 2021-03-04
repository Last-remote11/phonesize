import React from 'react';
import { Database } from './Database'

const Selector = ({ phoneChange }) => {

  const phoneList = Database.map((element, i) => {
    return (
        <option key={i} value={element.id}>{element.id}</option>
    )
  })

  return (
    <select name='setPhone' id='sp' onChange={phoneChange}>
      <option value={null}>null</option>
      {phoneList}
    </select>
  );
};

export default Selector;