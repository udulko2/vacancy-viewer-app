import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './assets/logo.jpg';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to={'/'}><img src={logo} alt="logo" /></Link>
      <div className='menu'>
        <NavLink to={'/search'}>Поиск вакансий</NavLink>
        <NavLink to={'/starred'}>Избранное</NavLink>
      </div>
    </header>
  );
};

export default Header;