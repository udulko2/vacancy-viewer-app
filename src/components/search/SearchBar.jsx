import search from './assets/search.svg';
import './search_bar.css';

const SearchBar = ({ searchValue, onChange, handleSearch }) => {
  return (
    <div className='search-input'>
      <div className='search-icon-wrapper'><img src={search} alt="search" /></div>
      <input value={searchValue} onChange={onChange} className='search-text-input' type="text" placeholder='Введите название вакансии' />
      <div className='search-button-wrapper'><button onClick={handleSearch} type='button'>Поиск</button></div>
    </div>
  );
};

export default SearchBar;