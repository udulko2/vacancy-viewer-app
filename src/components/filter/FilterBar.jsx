import { NumberInput, Select, Space } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogues } from '../../api/api';
import { setCatalog } from '../../store/cataloguesSlice';
import { setPaymentFrom, setPaymentTo } from '../../store/paymentSlice';
import Arrow from './Arrow';
import { ReactComponent as ResetDefault } from './assets/reset.svg';
import './filter_bar.css';

const FilterBar = ({ handleSearch }) => {
  const dispatch = useDispatch()

  const [catalogues, setCatalogues] = useState([])

  const catalog = useSelector(state => state.catalogues.catalog)
  const paymentFrom = useSelector(state => state.payment.paymentFrom)
  const paymentTo = useSelector(state => state.payment.paymentTo)

  useEffect(() => {
    getCatalogues(setCatalogues)
  }, [])

  const selectData = catalogues.map((item) => {
    return { value: item.key, label: item.title }
  })

  function handleFilterReset() {
    dispatch(setCatalog(""))
    dispatch(setPaymentFrom(""))
    dispatch(setPaymentTo(""))
  }

  return (
    <div className='filter-bar'>
      <div className='filter-top'>
        <div className='filter-title'>Фильтры</div>
        <div className='filter-reset' onClick={handleFilterReset}>
          <span>Сбросить все</span>
          <ResetDefault />
        </div>
      </div>
      <div className='filter-industry'>
        <label className='industry-label'>Отрасль</label>
        <Select value={catalog} onChange={c => dispatch(setCatalog(c))} data={selectData}
          placeholder="Выберите отрасль"
          rightSection={<Arrow />}
          rightSectionWidth={48}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data-elem="industry-select"
        />
      </div>
      <div className="filter-salary">
        <label className='salary-label'>Оклад</label>
        <NumberInput value={paymentFrom} onChange={pf => dispatch(setPaymentFrom(pf))}
          placeholder="От"
          min={0}
          stepHoldDelay={500}
          stepHoldInterval={1}
          rightSectionWidth={36}
          data-elem="salary-from-input"
        />
        <Space h={8} />
        <NumberInput value={paymentTo} onChange={pt => dispatch(setPaymentTo(pt))}
          placeholder="До"
          min={0}
          stepHoldDelay={500}
          stepHoldInterval={1}
          rightSectionWidth={36}
          data-elem="salary-to-input"
        />
      </div>
      <button className='filter-button' type='button' onClick={() => handleSearch(1)} data-elem="search-button">Применить</button>
    </div>
  );
};

export default FilterBar;