import React from 'react';

import './ManufacturerRadioButton.css';

function ManufacturerRadioButton({ rowId }) {

  function handleChange () {
    console.log(rowId)
  }

  return (
      <input className='manufacturer-radio-button' type='radio' name="name" onChange={handleChange}/>
  )
};

export default ManufacturerRadioButton;
