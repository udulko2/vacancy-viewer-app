import React from 'react';
import reset from "./assets/reset.svg";
import './filter.css';

const Filter = () => {
  return (
    <div className='filter-bar'>
      <div className='filter-head'>
        <div className='filter-title'>Фильтры</div>
        <div className='filter-reset'>
          <span>Сбросить все</span>
          <img src={reset} alt="reset" />
        </div>
      </div>
      <div className='filter-industry'>
        <div className='industry-title'>Отрасль</div>
        <input type="text" placeholder='Выберете отрасль' />
      </div>
      <div className="filter-salary">
        <div className='salary-title'>Оклад</div>
        <input type="text" placeholder='От' />
        <input type="text" placeholder='До' />
      </div>
      <button className='filter-button'>Применить</button>
    </div>
  );
};

export default Filter;