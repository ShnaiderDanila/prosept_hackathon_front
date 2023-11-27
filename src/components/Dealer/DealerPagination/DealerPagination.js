import React from 'react';

import './DealerPagination.css';

function DealerPagination() {

  return (
    <ul className='dealer-pagination'>
      <li className='dealer-pagination__item'>
        <button className='dealer-pagination__button' href='/'>Назад</button>
      </li>
      <li className='dealer-pagination__item'>
        <a className='dealer-pagination__link' href='/'>1</a>
      </li>
      <li className='dealer-pagination__item'>
        <a className='dealer-pagination__link' href='/'>2</a>
      </li>
      <li className='dealer-pagination__item'>
        <a className='dealer-pagination__link' href='/'>3</a>
      </li>
      <li className='dealer-pagination__item'>
        <a className='dealer-pagination__link' href='/'>4</a>
      </li>
      <li className='dealer-pagination__item'>
        <a className='dealer-pagination__link' href='/'>5</a>
      </li>
      <li className='dealer-pagination__item'>
        <button className='dealer-pagination__button' href='/'>Вперед</button>
      </li>
    </ul>
  )
};

export default DealerPagination;
