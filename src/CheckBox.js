import { ContactSupportOutlined } from '@material-ui/icons';
import React from 'react';

const CheckBox = ({ switchCard }) => {
  return (
    <div>
      Display Credit Card
      <input type='checkbox' value='displayCard' defaultChecked={true} onClick={()=> switchCard()}>
      </input>
    </div>
  );
};

export default CheckBox;