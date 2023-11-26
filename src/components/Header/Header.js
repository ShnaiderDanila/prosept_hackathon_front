import React from 'react';

import './Header.css';
import logo from '../../images/prosept-logo.svg';

function Header() {

  return (
    <header className="header">
      <div className="header__container">
      <img className='logo link' src={logo} alt='Изображение логотипа' />

      </div>
    </header>
  )
};

export default Header;
