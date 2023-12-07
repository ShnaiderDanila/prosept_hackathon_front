import { useState, useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

import './GeneralAnalyticsFilter.css';

function GeneralAnalyticsFilter(props) {

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

  function handleSelectStatus(e) {
    if (e.target.classList.contains('general-analytics-dropdown-menu__item')) {
      setDropdownMenuIsOpen(!dropdownMenuIsOpen)
      setFilter(e.target.textContent)
    }
    if (e.target.textContent === 'Все') {
      setFilter(null)
    }
  }

  useOutsideClick(dropdownMenuRef, handleCloseDropdownMenu, dropdownMenuIsOpen)

  if (props.column.Header === 'Наименование товара' || props.column.Header === 'Дата записи') {
    return (
      <form className='general-analytics-filter-form' >
        <input
          className='general-analytics-filter-input'
          type='text'
          autoComplete="off"
          value={filterValue || ''}
          onChange={(e) => setFilter(e.target.value)} />
      </form>
    )
  } else {
    return (
      <div className='general-analytics-dropdown-menu'>
        <div ref={dropdownMenuRef} className='general-analytics-dropdown-menu__select' onClick={handleOpenDropdownMenu}>
          <span className='general-analytics-dropdown-menu__selected'>{filterValue ? filterValue : 'Все'} </span>
          <div className={`general-analytics-dropdown-menu__caret`}></div>
        </div>
        {props.column.Header === 'Статус сопоставления' &&
          (
            <ul
              className={`general-analytics-dropdown-menu__list ${dropdownMenuIsOpen && 'general-analytics-dropdown-menu__list_open'}`}
              onClick={handleSelectStatus}>
              <li className='general-analytics-dropdown-menu__item'>Все</li>
              <li className='general-analytics-dropdown-menu__item'>Да</li>
              <li className='general-analytics-dropdown-menu__item'>Нет</li>
              <li className='general-analytics-dropdown-menu__item'>Не рассмотрен</li>
              <li className='general-analytics-dropdown-menu__item'>Отложено</li>
            </ul>
          )
        }
        {props.column.Header === 'Продавец' &&
          (
            <ul
              className={`general-analytics-dropdown-menu__list ${dropdownMenuIsOpen && 'general-analytics-dropdown-menu__list_open'}`}
              onClick={handleSelectDealer}>
              <li className='general-analytics-dropdown-menu__item'>Все</li>
              {props.dealers.map((obj, index) => {
                return (
                  <li key={index} className='general-analytics-dropdown-menu__item'>{obj.name}</li>
                )
              })}
            </ul>
          )}
      </div>
    )
  }
};

export default GeneralAnalyticsFilter;
