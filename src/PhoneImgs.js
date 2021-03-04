import React from 'react';


const PhoneImgs = ({ array, realSize }) => {


  return (
    array.map((phone, i) => {
        return (
        <img key={i} src={phone.frontImg} alt='hello' width={phone.width*(realSize/10)} height={phone.height*(realSize/10)}></img>
        )
      })
  )
}

export default PhoneImgs;