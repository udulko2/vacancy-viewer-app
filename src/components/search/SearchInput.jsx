import search from './assets/search.svg';
import './search_input.css';

const SearchInput = () => {
  return (
    <div className='search-input'>
      <div className='search-icon-wrapper'><img src={search} alt="search" /></div>
      <input className='search-text-input' type="text" placeholder='Введите название вакансии' />
      <div className='search-button-wrapper'><button type='button'>Поиск</button></div>
    </div>
  );
};

export default SearchInput;