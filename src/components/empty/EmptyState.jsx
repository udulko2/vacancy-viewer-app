import React from 'react';
import { Link } from 'react-router-dom';
import emptyImage from "./assets/empty.png";
import './empty_state.css';

const EmptyState = ({ message, sourcePage }) => {

  return (
    <div className="empty-state">
      <img src={emptyImage} alt="empty" />
      <div>{message}</div>
      {(sourcePage === 'starred') && <Link to={'/search'}>Поиск вакансий</Link>}
    </div>
  );
};

export default EmptyState;