import React from 'react';

import './DealerSearchForm.css';

function DealerSearchForm({ handleSearchQuery, setSearchQuery, searchQuery }) {

  // Функция для редактирования инпута SearchQuery
  function handleChangeSearchQuery(evt) {
    setSearchQuery(evt.target.value)
  }

  return (
    <form className='dealer-search-form' >
      <input
        className='dealer-search-input'
        type='text'
        placeholder='Найти'
        autoComplete="off"
        value={searchQuery || ''}
        onChange={handleChangeSearchQuery}>
      </input>
      <button className='dealer-search-button' type='submit' onClick={handleSearchQuery}>Найти</button>
    </form>
  )
};

export default DealerSearchForm;
