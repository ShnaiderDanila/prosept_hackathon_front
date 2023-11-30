import React from 'react';

import './Main.css';

import Dealer from '../Dealer/Dealer';
import Manufacturer from '../Manufacturer/Manufacturer';
import FileForm from '../FileForm/FileForm';

export default function Main(props) {
  // console.log(props);
  return (
    <main className='main'>
        <FileForm />
      <div className="all-products_container">
        <Manufacturer
        onComparePosition={props.onComparePosition}
        onNotComparePosition={props.onNotComparePosition}
        onPostonePosition={props.onPostonePosition}
        />
        <Dealer />
      </div>
    </main>
  )
}
