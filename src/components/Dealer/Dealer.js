import React from 'react';

import './Dealer.css';

import DealerProductTable from './DealerProductTable/DealerProductTable';

function Dealer() {
  return (
    <section className='dealer'>
      <h2 className='dealer__title'>Товары дилеров</h2>
      <DealerProductTable />
    </section>
  )
};

export default Dealer;
