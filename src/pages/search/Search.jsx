import { Pagination } from "@mantine/core";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import SearchInput from "../../components/search/SearchInput";
import './search.css';

const Search = () => {
  return (
    <div className="search-page">
      <div className="container">
        <div className="search-inner">
          <Filter />
          <div className="search-root">
            <SearchInput />
            <div className="search-results">
              <Link to={'/vacancy'}><Card /></Link>
              <Link to={'/vacancy'}><Card /></Link>
              <Link to={'/vacancy'}><Card /></Link>
              <Link to={'/vacancy'}><Card /></Link>
            </div>
            <Pagination total={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;