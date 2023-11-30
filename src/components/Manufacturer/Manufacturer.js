import React from 'react';

import ProductForm from './ProductForm/ProductForm';

import './Manufacturer.css';

function Manufacturer(props) {

  return (
    <section className='manufacturer_product'>
      <h2 className='product__title'>Товары производителя</h2>
      <ProductForm
        onComparePosition={props.onComparePosition}
        onNotComparePosition={props.onNotComparePosition}
        onPostonePosition={props.onPostonePosition}
      />
    </section>
  )
};

export default Manufacturer;
