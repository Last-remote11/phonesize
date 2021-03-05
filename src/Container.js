import React from 'react';
import './Container.css'

function Container({ realSize, children }) {
  return (
    <div className='center'>
      {children}
    </div>
  );
}

export default Container;