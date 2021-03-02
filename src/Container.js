import React from 'react';
import './Container.css'

function Container({ children }) {
  return (
    <div className='center'>
      {children}
    </div>
  );
}

export default Container;