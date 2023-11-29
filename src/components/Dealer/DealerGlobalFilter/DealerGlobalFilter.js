import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

import './DealerGlobalFilter.css';

function DealerGlobalFilter({ filterValue, setFilterValue }) {
  const [value, setValue] = useState(filterValue)

  const onChange = useAsyncDebounce(value => {
    setFilterValue(value || undefined)
  }, 300)

  return (
    <form className='dealer-global-filter' >
      <input
        className='dealer-global-filter__input'
        type='text'
        placeholder='Глобальный поиск'
        autoComplete="off"
        value={value || ''}
        onChange={(event) => {
          setValue(event.target.value);
          onChange(event.target.value);
        }} />
    </form>
  )
};

export default DealerGlobalFilter;
