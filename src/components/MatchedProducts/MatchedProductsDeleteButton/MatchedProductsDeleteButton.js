import React from 'react';

import './MatchedProductsDeleteButton.css';

function MatchedProductsDeleteButton() {

  function handleDelete() {
    console.log(123)
  }

  return (
    <button className='matched-products-delete-button' onClick={handleDelete}>
      Удалить
    </button>
  )
};

export default MatchedProductsDeleteButton;
