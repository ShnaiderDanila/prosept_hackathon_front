import { useState, useEffect } from 'react';

import './GeneralAnalytics.css';

import { mainApi } from '../../utils/MainApi';

import GeneralAnalyticsDiagram from './GeneralAnalyticsDiagram/GeneralAnalyticsDiagram';
import GeneralAnalyticsTable from './GeneralAnalyticsTable/GeneralAnalyticsTable';


// const dealerProducts = [{ dealer_id: 1 }, { dealer_id: 1 }, { dealer_id: 1 }, { dealer_id: 1 }, { dealer_id: 2 }, { dealer_id: 3 }, { dealer_id: 4 }, { dealer_id: 5 }, { dealer_id: 6 }];

// const dealers = [{ dealer_name: "Moi_vibor_WB", id: 1 }, { name: "Akson", id: 2 }, { name: "Bafus", id: 3 }, { name: "Castorama", id: 5 }, { name: "Cubatora", id: 6 }];

// for (let i = 0; i < dealerProducts.length; i++) {
//   const dealerId = dealerProducts[i].dealer_id;
//   const dealer = dealers.find(dealer => dealer.id === dealerId);

//   if (dealer) {
//     dealerProducts[i].name = dealer.name;
//   }
// }

// console.log(dealerProducts);

export default function GeneralAnalytics() {

  const [dealersProducts, setDealersProducts] = useState([]);

  const [selectedDealer, setSelectedDealer] = useState(null)

  useEffect(() => {
    mainApi.getPendingDealersProducts()
      .then((data) => {
        fetch(`http://prosept.sytes.net/api/dealer/`, {
          headers: { 'Content-Type': 'application/json' }
        }).then(res => {
          if (res.ok) {
            return res.json();
          }
        })
          .then((arr) => {
            for (let i = 0; i < data.length; i++) {
              const dealerId = data[i].dealer_id;
              const dealer = arr.find(dealer => dealer.id === dealerId);

              if (dealer) {
                data[i].dealer_name = dealer.name;
              }
            }
            return data
          })
          .then((dealersProducts) => {
            setDealersProducts(dealersProducts);
          })
      })
  }, []);

  return (
    <section className='general-analytics'>
      <div className='general-analytics__container'>
        <GeneralAnalyticsDiagram dealersProducts={dealersProducts} selectedDealer={selectedDealer} />
        <GeneralAnalyticsTable dealersProducts={dealersProducts} setSelectedDealer={setSelectedDealer} />
      </div>

    </section>
  )
}
