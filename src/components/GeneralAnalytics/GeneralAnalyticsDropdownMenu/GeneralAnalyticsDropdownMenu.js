import { useEffect, useState } from 'react';

import './GeneralAnalyticsDropdownMenu.css';

function GeneralAnalyticsDropdownMenu({ column, setSelectedDealer }) {

  const { filterValue, setFilter } = column;

  // Перенести выше в функцию при запросе к API
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    fetch(`http://prosept.sytes.net/api/dealer/`, {
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    })
      .then((arr) => {
        const newArr = arr.sort((a, b) => a.name.localeCompare(b.name));
        setDealers(newArr);
      })
  }, [])

  const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false);

  function handleOpenDropdownMenu(e) {
    setDropdownMenuIsOpen(!dropdownMenuIsOpen)
  }

  function handleSelectOption(e) {
    if (e.target.classList.contains('general-analytics-dropdown-menu__item')) {
      setDropdownMenuIsOpen(!dropdownMenuIsOpen)
      setFilter(e.target.textContent)
      setSelectedDealer(e.target.textContent)
    }
    if (e.target.textContent === 'Все') {
      setFilter(null)
      setSelectedDealer(null)
    }
  }

  return (
    <div className='general-analytics-dropdown-menu'>
      <div className='general-analytics-dropdown-menu__select' onClick={handleOpenDropdownMenu}>
        <span className='general-analytics-dropdown-menu__selected'>{filterValue ? filterValue : 'Все'} </span>
        <div className={`general-analytics-dropdown-menu__caret`}></div>
      </div>
      <ul
        className={`general-analytics-dropdown-menu__list ${dropdownMenuIsOpen && 'general-analytics-dropdown-menu__list_open'}`}
        onClick={handleSelectOption}>
        <li className='general-analytics-dropdown-menu__item'>Все</li>
        {dealers.map((obj, index) => {
          return (
            <li key={index} className='general-analytics-dropdown-menu__item'>{obj.name}</li>
          )
        })}
      </ul>
    </div>
  )
};

export default GeneralAnalyticsDropdownMenu;
