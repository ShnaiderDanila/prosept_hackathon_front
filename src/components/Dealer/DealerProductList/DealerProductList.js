import React from 'react';

import DealerProduct from '../DealerProduct/DealerProduct';

import './DealerProductList.css';

function DealerProductList({ dealerProducts }) {

  return (
    <>
      {dealerProducts.length === 0
        ? <p className='dealer-product-list-error'>К сожалению, товары не найдены.</p>
        : <ul className='dealer-product-list'>
          {dealerProducts.map((product) => {
            return <DealerProduct
              key={product.id}
              productPrice={product.price}
              productImage={product.product_image}
              productUrl={product.product_url}
              productName={product.product_name}
              productDate={product.date}
              dealerId={product.dealer_id} />
          })}
        </ul>}
    </>
  )
};

export default DealerProductList;
