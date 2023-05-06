import { Loader, Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVacancies } from "../../api/api";
import Card from "../../components/card/Card";
import EmptyState from "../../components/empty/EmptyState";
import FilterBar from "../../components/filter/FilterBar";
import SearchBar from "../../components/search/SearchBar";
import { setEmpty } from "../../store/vacanciesSlice";
import './search.css';

const Search = () => {
  console.log("SEARCH ENTRY");

  const dispatch = useDispatch()
  const selectedCatalog = useSelector(state => state.catalogues.selectedCatalog)
  const paymentFrom = useSelector(state => state.payment.paymentFrom)
  const paymentTo = useSelector(state => state.payment.paymentTo)

  const vacancies = useSelector(state => state.vacancies.items)
  const isFetching = useSelector(state => state.vacancies.isFetching)
  const isFetchError = useSelector(state => state.vacancies.isFetchError)
  const totalCount = useSelector(state => state.vacancies.totalCount)
  const perPage = useSelector(state => state.vacancies.perPage)
  const currentPage = useSelector(state => state.vacancies.currentPage)

  // const [empty, setEmpty] = useState(false)
  const empty = useSelector(state => state.vacancies.empty)

  const [searchValue, setSearchValue] = useState("")

  const pagesCount = Math.ceil(totalCount / perPage)

  useEffect(() => {
    console.log("SEARCH MOUNT! Total: " + totalCount);
    dispatch(getVacancies(searchValue, paymentFrom, paymentTo, selectedCatalog, perPage, currentPage))

    return () => {
      console.log("SEARCH UNMOUNT! Total: " + totalCount);
      // setEmpty(false)
      dispatch(setEmpty(false))
    }
  }, [dispatch])

  function handleSearchChange(e) {
    setSearchValue(e.target.value)
  }

  function handleSearch() {
    dispatch(getVacancies(searchValue, paymentFrom, paymentTo, selectedCatalog, perPage, 1))
  }

  function handlePaginationChange(pageNumber) {
    dispatch(getVacancies(searchValue, paymentFrom, paymentTo, selectedCatalog, perPage, pageNumber))
  }

  console.log("SEARCH TOTAL COUNT: " + totalCount);
  console.log("SEARCH empty: " + empty);
  if (empty) {
    // return <Navigate to='/empty/?source_page=search' />
  }

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-inner">
          <FilterBar handleSearch={handleSearch} />
          <div className="search-root">
            <SearchBar searchValue={searchValue} onChange={handleSearchChange} handleSearch={handleSearch} />
            <div className="search-results">
              {isFetchError &&
                <div style={{ color: 'red', width: 'fit-content', margin: '0 auto' }}>
                  Error occurred! Please reload the page!
                </div>
              }
              {
                !isFetching
                  ?
                  empty ?
                    <div className="no-results">
                      <EmptyState message={'По вашему запросу ничего не найдено!'} />
                    </div>
                    :
                    vacancies.map(v => <Card key={v.id} vacancy={v} />)
                  :
                  <div className="loader">
                    <Loader size={100} />
                  </div>
              }
            </div>
            {!isFetching && <Pagination value={currentPage} onChange={handlePaginationChange} total={pagesCount} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;