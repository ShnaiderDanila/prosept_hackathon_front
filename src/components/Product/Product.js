import React from 'react';

import './Product.css';

function Product({ productPrice, productUrl, productName, productDate, productImage, dealerId }) {

  return (
    <li className='product'>
      <div className='description'>
        <a className='product__link' href={productUrl} target="_blank" rel="noreferrer">
          <img className='product__img' alt='Фото товара' src={productImage} />
        </a>
        <p className='product__price'>{productPrice} &#8381;</p>
        <a className='product__name' href={productUrl} target="_blank" rel="noreferrer">
          {productName}
        </a>
      </div>
      <div className='container'>
        <p className='product__date'>Дата: {productDate}</p>
        <p className='product__dealer'>Продавец: {dealerId}</p>
        <div className='product__button-container'>
          <button className='product__button'>Сопоставить</button>
        </div>
      </div>
    </li>
  )
};

export default Product;
