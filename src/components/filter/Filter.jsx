import React from 'react';
import reset from "./assets/reset.svg";
import './filter.css';
import { NumberInput, Select, Space } from '@mantine/core';
import Arrow from './Arrow';

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
        <label className='industry-label'>Отрасль</label>
        {/* <input type="text" placeholder='Выберете отрасль' /> */}
        <Select
          // label="Отрасль"
          placeholder="Выберите отрасль"
          rightSection={<Arrow />}
          rightSectionWidth={48}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data={['React', 'Angular', 'Svelte123', 'Vue8754385734875934875493875498dsjfhdskjf9384943849387']}
        />
      </div>
      <div className="filter-salary">
        <label className='salary-label'>Оклад</label>
        <NumberInput
          placeholder="От"
          min={0}
          stepHoldDelay={500}
          stepHoldInterval={1}
          rightSectionWidth={28}
        />
        <Space h={8} />
        <NumberInput
          placeholder="До"
          min={0}
          stepHoldDelay={500}
          stepHoldInterval={1}
          rightSectionWidth={28}
        />
      </div>
      <button className='filter-button' type='button'>Применить</button>
    </div>
  );
};

export default Filter;