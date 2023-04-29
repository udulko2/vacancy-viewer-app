import { Pagination } from "@mantine/core";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Header from "../../components/header/Header";
import SearchInput from "../../components/search/SearchInput";
import './search.css';

const Search = () => {
  return (
    <div className="search-page">
      <div className="header-wrapper">
        <div className="container">
          <Header />
        </div>
      </div>
      <section className="search">
        <div className="container">
          <div className="search-inner">
            <Filter />
            <div className="search-root">
              <SearchInput />
              <div className="search-results">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <Pagination total={10} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;