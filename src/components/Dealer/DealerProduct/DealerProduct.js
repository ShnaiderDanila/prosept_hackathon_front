import React from 'react';

import './DealerProduct.css';

function DealerProduct({ productPrice, productUrl, productName, productDate, productImage, dealerId }) {

  return (
    <li className='dealer-product'>
      <div className='dealer-product__description'>
        <a className='dealer-product__name' href={productUrl} target="_blank" rel="noreferrer">
          {productName}
        </a>
        <div className='dealer-product__button-container'>
          <button className='dealer-product__button'>Сопоставить</button>
        </div>
      </div>
      <p className='dealer-product__price'>{productPrice} &#8381;</p>
      <div className='dealer-product__container'>
        <p className='dealer-product__date'>Дата: {productDate}</p>
        <p className='dealer-product__dealer'>Продавец: {dealerId}</p>
      </div>
    </li>
  )
};

export default DealerProduct;
