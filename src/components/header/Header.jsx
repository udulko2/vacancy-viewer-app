import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './assets/logo.jpg';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <header className="header-inner">
          <Link to={'/'}><img src={logo} alt="logo" /></Link>
          <div className='menu'>
            <NavLink to={'/search'}>Поиск вакансий</NavLink>
            <NavLink to={'/starred'}>Избранное</NavLink>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;