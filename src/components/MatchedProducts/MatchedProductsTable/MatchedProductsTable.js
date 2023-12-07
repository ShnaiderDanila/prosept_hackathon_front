import { useMemo } from 'react';

import { useTable, useSortBy, useFilters, usePagination } from 'react-table';

import './MatchedProductsTable.css';

import {
  dealerProductName,
  manufacturerProductName,
  dealerArticle,
  manufaturerArticle,
  seller,
  deleteMatched,
} from '../../../utils/constants';

import MatchedProductsPagination from '../MatchedProductsPagination/MatchedProductsPagination';
import MatchedProductsDeleteButton from '../MatchedProductsDeleteButton/MatchedProductsDeleteButton'
import MatchedProductsFilter from '../MatchedProductsFilter/MatchedProductsFilter';

import Preloader from '../../Preloader/Preloader';

const COLUMNS = [
  {
    Header: seller,
    accessor: 'dealer_name',
  },
  {
    Header: dealerProductName,
    accessor: 'dealer_price_name',
    Cell: ({ row }) =>
      <a
        className='dealer-table__product-link'
        href={row.original.dealer_price_url}
        target="_blank" rel="noreferrer">
        {row.values.dealer_price_name}
      </a>
  },
  {
    Header: dealerArticle,
    accessor: 'key_id',
  },
  {
    Header: manufacturerProductName,
    accessor: "product_name",
  },
  {
    Header: manufaturerArticle,
    accessor: 'product_article',
  },
  {
    Header: deleteMatched,
    Cell: (props) =>
      <MatchedProductsDeleteButton />
  }
]

function GeneralAnalyticsTable({ matchedProducts, isLoadingMatchedProducts, dealers }) {

  const defaultColumn = useMemo(() => {
    return {
      Filter: MatchedProductsFilter
    }
  }, []);

  const tableInstance = useTable({
    columns: COLUMNS,
    data: matchedProducts,
    defaultColumn: defaultColumn,
  }, useFilters, useSortBy, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  return (
    <>
      {isLoadingMatchedProducts
        ? <Preloader />
        : <>
          <table className='general-analytics-table' {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr className='general-analytics-table__row' {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th className='general-analytics-table__header-cell' {...column.getHeaderProps()}>
                      <div className='general-analytics-table__container'>
                        <div {...column.getSortByToggleProps()} className='general-analytics-table__sort-header'>
                          <div className='general-analytics-table__sort-title'>{column.render('Header')}</div>
                          <p className='general-analytics-table__sorted-icon'>
                            {column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}
                          </p>
                        </div>
                        <div>
                          {column.canFilter ? column.render('Filter', {matchedProducts: matchedProducts, dealers: dealers}) : null}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map((cell) => {
                        return <td className='general-analytics-table__cell' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })
                    }
                  </tr>
                )
              })}
            </tbody>
          </table>
          <MatchedProductsPagination
            pageIndex={pageIndex}
            pageOptions={pageOptions}
            gotoPage={gotoPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
            nextPage={nextPage}
            previousPage={previousPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageCount={pageCount}
          />
        </>
      }
    </>
  )
};

export default GeneralAnalyticsTable;
