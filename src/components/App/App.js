import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import StatisticsDealer from '../StatisticsDealer/StatisticsDealer';

import { mainApi } from '../../utils/MainApi';

function App() {

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

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path="/" element={<Main
          onComparePosition={handleComparePosition}
          onNotComparePosition={handleNotComparePosition}
          onPostonePosition={handlePostponePosition}
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
