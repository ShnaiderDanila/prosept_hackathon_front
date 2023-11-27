import React from 'react';

import './Dealer.css';

import ProductList from '../ProductList/ProductList';
import ProductPagination from '../ProductPagination/ProductPagination';

function Dealer() {

  return (
    <section className='dealer'>
      <h2 className='dealer__title'>Товары дилеров</h2>
      <form className='dealer__search-form'>
        <input className='dealer__search-input' type='text' placeholder='Найти' autocomplete="off"></input>
        <button className='dealer__search-button' type='button'>Найти</button>
      </form>
      <ul className='dealer__filter-menu'>
        <span className='dealer__filter-span'>Сортировать по:</span>
        <li className='dealer__filter-item'><a className='dealer__filter-link' href='/'>по дате</a></li>
        <li className='dealer__filter-item'><a className='dealer__filter-link' href='/'>по цене</a></li>
        <li className='dealer__filter-item'><a className='dealer__filter-link' href='/'>по продавцу</a></li>
        <li className='dealer__filter-item'><a className='dealer__filter-link' href='/'>по статусу сопоставления</a></li>
      </ul>
      <ProductList />
      <ProductPagination />
    </section>

  )
};

export default Dealer;
