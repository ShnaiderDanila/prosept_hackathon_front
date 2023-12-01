import React from 'react';

import './DealerRadioButton.css';

function DealerRadioButton({ rowId }) {

  function handleChange () {
    console.log(rowId)
  }

  return (
      <input type='radio' name="name" onChange={handleChange}/>
  )
};

export default DealerRadioButton;
