import React from 'react';

import './Main.css';

import Dealer from '../Dealer/Dealer';

export default function Main() {
  return (
    <main className='main'>

        <div className="product_container">
          Товары производителя
        </div>
        <Dealer />
    </main>
  )
}
