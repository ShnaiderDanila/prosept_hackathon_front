import { useState } from 'react';

import './GeneralAnalyticsPagination.css';

function GeneralAnalyticsPagination({
  pageIndex,
  pageOptions,
  gotoPage,
  pageSize,
  setPageSize,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageCount }) {

  const [value, setValue] = useState(pageIndex + 1)
  const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false);

  function handleClickDecrement() {
    if (pageIndex > 0) {
      gotoPage(pageIndex - 1)
      setValue(pageIndex)
    }
  }

  function handleClickIncrement() {
    if (pageIndex + 1 < pageCount) {
      gotoPage(pageIndex + 1)
      setValue(pageIndex + 2)
    }
  }

  function handleChangeInput(e) {
    setValue(e.target.value);
    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
    gotoPage(pageNumber)
  }

  function handleOpenSelectMenu(e) {
    setSelectMenuIsOpen(!selectMenuIsOpen)
  }

  function handleSelectOption(e) {
    if (e.target.classList.contains('general-analytics-pagination__dropdown-item')) {
      setPageSize(e.target.value);
      setSelectMenuIsOpen(!selectMenuIsOpen)
    }
  }

  return (
    <div className='general-analytics-pagination'>
      <div className='general-analytics-pagination__dropdown'>
        <div className='general-analytics-pagination__select' onClick={handleOpenSelectMenu}>
          <span className='general-analytics-pagination__selected'>{pageSize} позиций</span>
          <div className={`general-analytics-pagination__caret`}></div>
        </div>
        <ul
          className={`general-analytics-pagination__dropdown-menu ${selectMenuIsOpen && 'general-analytics-pagination__dropdown-menu_open'}`}
          onClick={handleSelectOption}>
          <li className='general-analytics-pagination__dropdown-item' value='10'>10 позиций</li>
          <li className='general-analytics-pagination__dropdown-item' value='25'>25 позиций</li>
          <li className='general-analytics-pagination__dropdown-item' value='50'>50 позиций</li>
        </ul>
      </div>
      <div className='general-analytics-pagination__container'>
        <button className='general-analytics-pagination__button' disabled={!canPreviousPage}
          onClick={() => {
            gotoPage(0);
            setValue(1);
          }}>
          {'<<'}
        </button>
        <button className='general-analytics-pagination__button' disabled={!canPreviousPage}
          onClick={() => {
            previousPage();
            setValue(pageIndex);
          }}>
          Назад
        </button>
        <p className='general-analytics-pagination__page-number'>
          {pageIndex + 1} из {pageOptions.length}
        </p>
        <button className='general-analytics-pagination__button' disabled={!canNextPage}
          onClick={() => {
            nextPage();
            setValue(pageIndex + 2);
          }}>
          Вперед
        </button>
        <button className='general-analytics-pagination__button' disabled={!canNextPage}
          onClick={() => {
            gotoPage(pageCount - 1)
            setValue(pageCount);
          }}>
          {'>>'}
        </button>
      </div>
      <div className='general-analytics-pagination__number'>
        <button className='general-analytics-pagination__decrement' onClick={handleClickDecrement}> - </button>
        <input type='number' className='general-analytics-pagination__number-input'
          value={value || ''}
          min='0'
          step='1'
          onChange={e => {
            handleChangeInput(e);
          }} />
        <button className='general-analytics-pagination__increment' onClick={handleClickIncrement}> + </button>
      </div>
    </div>
  )
};

export default GeneralAnalyticsPagination;
