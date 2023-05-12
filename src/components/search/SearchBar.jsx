import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../store/searchSlice';
import search from './assets/search.svg';
import './search_bar.css';

const SearchBar = ({ handleSearch }) => {
  const dispatch = useDispatch()
  const searchValue = useSelector(state => state.search.searchValue)

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      handleSearch(1)
    }
  }

  return (
    <div className='search-input'>
      <div className='search-icon-wrapper'><img src={search} alt="search" /></div>
      <input value={searchValue} onChange={e => dispatch(setSearchValue(e.target.value))} onKeyUp={handleKeyUp} className='search-text-input' type="text" placeholder='Введите название вакансии' data-elem="search-input" />
      <div className='search-button-wrapper'><button onClick={() => handleSearch(1)} type='button' data-elem="search-button">Поиск</button></div>
    </div>
  );
};

export default SearchBar;