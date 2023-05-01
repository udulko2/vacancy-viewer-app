import React from 'react';
import { Link } from 'react-router-dom';
import emptyImage from "./assets/empty.png";
import './empty.css';

const Empty = () => {
  return (
    <div className="empty-page">
      <div className="container">
        <div className="empty-inner">
          <img src={emptyImage} alt="empty" />
          <div>Упс, здесь еще ничего нет!</div>
          <Link to={'/search'}>Поиск вакансий</Link>
        </div>
      </div>
    </div>
  );
};

export default Empty;