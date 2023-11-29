import React from 'react';

import './DealerPagination.css';

function DealerPagination({
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

  return (
    <div className='dealer-pagination'>
      <span>
        Страница{' '}
        <strong>
          {pageIndex + 1} из {pageOptions.length}
        </strong>{' '}
      </span>
      <span>
        | Перейти на страницу: {' '}
        <input type='number' className='dealer-pagination__input' defaultValue={pageIndex + 1}
          onChange={e => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(pageNumber)
          }} />
      </span>
      <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
        {
          [10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize} позиций
            </option>
          ))
        }
      </select>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
      <button className='dealer-pagination__button' onClick={() => previousPage()} disabled={!canPreviousPage}>Назад</button>
      <button className='dealer-pagination__button' onClick={() => nextPage()} disabled={!canNextPage}>Вперед</button>
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
    </div>
  )
};

export default DealerPagination;
