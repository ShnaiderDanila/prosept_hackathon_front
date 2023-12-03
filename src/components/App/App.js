import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import StatisticsDealer from '../StatisticsDealer/StatisticsDealer';

import { mainApi } from '../../utils/MainApi';

function App() {
  // console.log(mainApi.getPendingDealersProducts);

  const [pendingDealersProducts, setPendingDealersProducts] = useState([]);

  function handleComparePosition(product) {
    mainApi.comparePosition();
    console.log(product);
  }

  function handleNotComparePosition(product) {
    mainApi.notComparePosition();
    console.log(product);
  }

  function handlePostponePosition(product) {
    mainApi.postponePosition();
    console.log(product);
  }

  useEffect(() => {
    mainApi.getPendingDealersProducts()
      .then((pendingDealersProducts) => {
        setPendingDealersProducts(pendingDealersProducts);
        // console.log(pendingDealersProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path="/" element={<Main
          onComparePosition={handleComparePosition}
          onNotComparePosition={handleNotComparePosition}
          onPostonePosition={handlePostponePosition}
          pendingDealersProducts={pendingDealersProducts}
        />} />
        <Route path="/statistics/dealers" element={<StatisticsDealer
        />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
