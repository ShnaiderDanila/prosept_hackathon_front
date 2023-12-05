import React from 'react';

import './DealerRadioButton.css';

function DealerRadioButton(props) {

  function handleChange () {
    props.getRecomendationToDealerProduct(props.rowId)
  }

  return (
      <input className='dealer-radio-button' type='radio' name="name" onChange={handleChange}/>
  )
};

export default DealerRadioButton;
