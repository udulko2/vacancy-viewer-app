import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from './assets/logo.jpg';
import './header.css';

const Header = () => {
  const location = useLocation()
  const active = (location.pathname === '/empty/') && (location.search === '?source_page=starred')

  return (
    <div className="header">
      <div className="container">
        <header className="header-inner">
          <Link to={'/'}><img src={logo} alt="logo" /></Link>
          <nav className='menu'>
            <NavLink to={'/search'}>Поиск вакансий</NavLink>
            <NavLink to={'/starred'} className={active && 'active'}>Избранное</NavLink>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;