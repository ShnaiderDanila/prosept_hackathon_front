import React from 'react';

import './ManufacturerRadioButton.css';

function ManufacturerRadioButton(props) {

  function handleChange () {

    props.getRadioValue(props.rowId)
  }

  return (
      <input className='manufacturer-radio-button' type='radio' name="name" onChange={handleChange}/>
  )
};

export default ManufacturerRadioButton;
