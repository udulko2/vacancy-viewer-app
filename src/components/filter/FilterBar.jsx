import { NumberInput, Select, Space } from '@mantine/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogues } from '../../api/api';
import { setSelectedCatalog } from '../../store/cataloguesSlice';
import { setPaymentFrom, setPaymentTo } from '../../store/paymentSlice';
import Arrow from './Arrow';
import reset from "./assets/reset.svg";
import './filter_bar.css';

const FilterBar = ({ handleSearch }) => {
  const dispatch = useDispatch()
  const catalogues = useSelector(state => state.catalogues.items)
  const selectedCatalog = useSelector(state => state.catalogues.selectedCatalog)
  const paymentFrom = useSelector(state => state.payment.paymentFrom)
  const paymentTo = useSelector(state => state.payment.paymentTo)

  useEffect(() => {
    dispatch(getCatalogues())
  }, [])

  const selectData = catalogues.map((item, index) => {
    return { value: item.key, label: item.title }
  })

  function handleSelectChange(value) {
    dispatch(setSelectedCatalog(value))
  }

  function handlePaymentFromChange(value) {
    dispatch(setPaymentFrom(value))
  }

  function handlePaymentToChange(value) {
    dispatch(setPaymentTo(value))
  }

  function handleFilterReset() {
    dispatch(setSelectedCatalog(""))
    dispatch(setPaymentFrom(""))
    dispatch(setPaymentTo(""))
  }

  return (
    <div className='filter-bar'>
      <div className='filter-top'>
        <div className='filter-title'>Фильтры</div>
        <div className='filter-reset' onClick={handleFilterReset}>
          <span>Сбросить все</span>
          <img src={reset} alt="reset" />
        </div>
      </div>
      <div className='filter-industry'>
        <label className='industry-label'>Отрасль</label>
        <Select value={selectedCatalog} onChange={handleSelectChange} data={selectData}
          placeholder="Выберите отрасль"
          rightSection={<Arrow />}
          rightSectionWidth={48}
          styles={{ rightSection: { pointerEvents: 'none' } }}
        />
      </div>
      <div className="filter-salary">
        <label className='salary-label'>Оклад</label>
        <NumberInput value={paymentFrom} onChange={handlePaymentFromChange}
          placeholder="От"
          min={0}
          stepHoldDelay={500}
          stepHoldInterval={1}
          rightSectionWidth={28}
        />
        <Space h={8} />
        <NumberInput value={paymentTo} onChange={handlePaymentToChange}
          placeholder="До"
          min={0}
          stepHoldDelay={500}
          stepHoldInterval={1}
          rightSectionWidth={28}
        />
      </div>
      <button className='filter-button' type='button' onClick={handleSearch}>Применить</button>
    </div>
  );
};

export default FilterBar;