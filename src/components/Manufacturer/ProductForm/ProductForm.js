import React, { useState } from 'react';

import './ProductForm.css';

import { products } from '../../../utils/constants';

function ProductForm(props) {
  const [value, setValue] = useState(null);

  function handleSubmit(event) {
    event.preventDefault()
    props.onComparePosition({value})
  }

  function handleNotComparePosition() {
    props.onNotComparePosition({value})
  }

  function handlePostponePosition() {
    props.onPostonePosition({value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <table className='product-table'>
        <thead>
          <tr>
            <th className='product-table__header-cell'></th>
            <th className='product-table__header-cell'>article</th>
            <th className='product-table__header-cell'>name</th>
            <th className='product-table__header-cell'>ozon_article</th>
            <th className='product-table__header-cell'>wb_article</th>
            <th className='product-table__header-cell'>ym_article</th>
            <th className='product-table__header-cell'>wb_article_td</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td className="product-table__cell">
                <input
                  type='radio'
                  name='product'
                  value={item.article}
                  id={item.article}
                  // checked={value === item.value}
                  onChange={e => setValue(e.target.value)}
                />
              </td>
              <td className="product-table__cell"><label htmlFor={item.value}>{item.article}</label></td>
              <td className="product-table__cell">{item.name}</td>
              <td className="product-table__cell">{item.ozon_article}</td>
              <td className="product-table__cell">{item.wb_article}</td>
              <td className="product-table__cell">{item.ym_article}</td>
              <td className="product-table__cell">{item.wb_article_td}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="product_buttons-container">
        <div className='product__button-container'>
          <button className='product__button' type='submit'>Да</button>
        </div>
        <div className='product__button-container'>
          <button className='product__button' type='button' onClick={handleNotComparePosition}>Нет</button>
        </div>
        <div className='product__button-container'>
          <button className='product__button' type='button' onClick={handlePostponePosition}>Отложить</button>
        </div>
      </div>
    </form>
  )
};

export default ProductForm;
