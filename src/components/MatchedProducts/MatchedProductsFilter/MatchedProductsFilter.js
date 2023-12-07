import { useState, useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

import './MatchedProductsFilter.css';

function MatchedProductsFilter(props) {

  const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false);

  const dropdownMenuRef = useRef(null);

  const { filterValue, setFilter } = props.column;

  function handleOpenDropdownMenu(e) {
    setDropdownMenuIsOpen(!dropdownMenuIsOpen)
  }

  function handleCloseDropdownMenu(e) {
    setDropdownMenuIsOpen(false)
  }

  function handleSelectDealer(e) {
    if (e.target.classList.contains('general-analytics-dropdown-menu__item')) {
      setDropdownMenuIsOpen(!dropdownMenuIsOpen)
      setFilter(e.target.textContent)
      props.setSelectedDealer(e.target.textContent)
    }
    if (e.target.textContent === 'Все') {
      setFilter(null)
      props.setSelectedDealer(null)
    }
  }

  useOutsideClick(dropdownMenuRef, handleCloseDropdownMenu, dropdownMenuIsOpen)

  if (props.column.Header === 'Наименование товара дилера'
    || props.column.Header === 'Наименование товара производителя'
    || props.column.Header === 'Артикул товара дилера'
    || props.column.Header === 'Артикул товара производителя') {
    return (
      <form className='matched-products-filter-form' >
        <input
          className='matched-products-filter-input'
          type='text'
          autoComplete="off"
          value={filterValue || ''}
          onChange={(e) => setFilter(e.target.value)} />
      </form>
    )
  } else {
    return (
      <div className='matched-products-dropdown-menu'>
        <div ref={dropdownMenuRef} className='matched-products-dropdown-menu__select' onClick={handleOpenDropdownMenu}>
          <span className='matched-products-dropdown-menu__selected'>{filterValue ? filterValue : 'Все'} </span>
          <div className={`matched-products-dropdown-menu__caret`}></div>
        </div>
        {props.column.Header === 'Продавец' &&
          (
            <ul
              className={`matched-products-dropdown-menu__list ${dropdownMenuIsOpen && 'matched-products-dropdown-menu__list_open'}`}
              onClick={handleSelectDealer}>
              <li className='matched-products-dropdown-menu__item'>Все</li>
              {props.matchedProducts.map((obj, index) => {
                return (
                  <li key={index} className='matched-products-dropdown-menu__item'>{obj.dealer_name}</li>
                )
              })}
            </ul>
          )}
      </div>
    )
  }
};

export default MatchedProductsFilter;
