import React from 'react';

const Selector = ({ Database }) => {

  const phoneList = Database.map((element, i) => {
    return (
        <option key={i} value={element.id}>{element.id}</option>
    )
  })

  return (
    <select onChange={}>
      {phoneList}
    </select>
  );
};

export default Selector;