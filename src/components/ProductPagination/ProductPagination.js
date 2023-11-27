import React from 'react';

import './ProductPagination.css';

function ProductPagination() {

  return (
    <ul className='product-pagination'>
      <li className='product-pagination__item'>
        <button className='product-pagination__button' href='/'>Назад</button>
      </li>
      <li className='product-pagination__item'>
        <a className='product-pagination__link' href='/'>1</a>
      </li>
      <li className='product-pagination__item'>
        <a className='product-pagination__link' href='/'>2</a>
      </li>
      <li className='product-pagination__item'>
        <a className='product-pagination__link' href='/'>3</a>
      </li>
      <li className='product-pagination__item'>
        <a className='product-pagination__link' href='/'>4</a>
      </li>
      <li className='product-pagination__item'>
        <a className='product-pagination__link' href='/'>5</a>
      </li>
      <li className='product-pagination__item'>
        <button className='product-pagination__button' href='/'>Вперед</button>
      </li>
    </ul>
  )
};

export default ProductPagination;
