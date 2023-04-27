import Filter from "../../components/filter/Filter";
import Header from "../../components/header/Header";
import Card from "../../components/search/vacancy/Card";
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
            <div className="search-results">
              SEARCH RESULTS LIST
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;