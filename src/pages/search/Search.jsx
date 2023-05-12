import { Loader, Pagination } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVacancies } from "../../api/api";
import Card from "../../components/card/Card";
import EmptyState from "../../components/empty/EmptyState";
import FilterBar from "../../components/filter/FilterBar";
import SearchBar from "../../components/search/SearchBar";
import { setCurrentPage, setIgnore } from "../../store/vacanciesSlice";
import './search.css';

const Search = () => {
  const dispatch = useDispatch()
  const searchValue = useSelector(state => state.search.searchValue)
  const catalog = useSelector(state => state.catalogues.catalog)
  const paymentFrom = useSelector(state => state.payment.paymentFrom)
  const paymentTo = useSelector(state => state.payment.paymentTo)

  const vacancies = useSelector(state => state.vacancies.items)
  const isFetching = useSelector(state => state.vacancies.isFetching)
  const isFetchError = useSelector(state => state.vacancies.isFetchError)
  const totalCount = useSelector(state => state.vacancies.totalCount)
  const perPage = useSelector(state => state.vacancies.perPage)
  const currentPage = useSelector(state => state.vacancies.currentPage)
  const ignore = useSelector(state => state.vacancies.ignore)

  const pagesCount = Math.ceil(totalCount / perPage)

  useEffect(() => {
    if (!ignore) {
      dispatch(getVacancies(searchValue, catalog, paymentFrom, paymentTo, perPage, currentPage))
    }
  }, [dispatch, ignore, searchValue, catalog, paymentFrom, paymentTo, perPage, currentPage])

  function handleSearch(page) {
    dispatch(setIgnore(false))
    dispatch(setCurrentPage(page))
  }

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-inner">
          <FilterBar handleSearch={handleSearch} />
          <div className="search-root">
            <SearchBar handleSearch={handleSearch} />
            <div className="search-results">
              {
                (isFetchError &&
                  <div style={{ color: 'red', width: 'fit-content', margin: '0 auto 16px' }}>
                    Error occurred! Please reload the page.
                  </div>)
                ||
                (!isFetching
                  ?
                  (totalCount === 0 ?
                    <div className="no-results">
                      <EmptyState message={'По вашему запросу ничего не найдено!'} />
                    </div>
                    :
                    vacancies.map(v => <Card key={v.id} vacancy={v} />))
                  :
                  <div className="loader">
                    <Loader size={100} />
                  </div>)
              }
            </div>
            {!isFetching && !isFetchError && <Pagination value={currentPage} onChange={p => handleSearch(p)} total={pagesCount} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;