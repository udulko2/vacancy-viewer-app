import { Pagination } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import './starred.css';

const Starred = () => {
  console.log("Starred ENTRY");

  const [vacancies, setVacancies] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 4;
  const [redirect, setRedirect] = useState(false)
  const pagesCount = Math.ceil(totalCount / perPage)
  const LS_KEY = "vacancy-viewer-stars"

  useEffect(() => {
    console.log("Starred MOUNT");
    const starsArray = JSON.parse(localStorage.getItem(LS_KEY))
    if (starsArray) {
      const total = starsArray.length
      console.log("STARRED Total " + total);
      if (total > 0) {
        const end = currentPage * perPage
        const start = end - perPage
        const starsOnPage = starsArray.slice(start, end)
        setVacancies(starsOnPage)
        setTotalCount(total)
      } else {
        setRedirect(true)
      }
    }

    return () => {
      console.log("Starred UNMOUNT");
      // setRedirect(false)
    }
  }, [currentPage])

  function handlePageNumberChange(pageNumber) {
    setCurrentPage(pageNumber)
  }

  console.log("STARRED redirect: " + redirect);
  console.log("STARRED totalCount: " + totalCount);
  if (redirect) {
    return <Navigate to='/empty/?source_page=starred' />
  }

  return (
    <div className="starred-page">
      <div className="container">
        <div className="starred-inner">
          <div className="starred-cards">
            {vacancies.map(v => <Card key={v.id} vacancy={v} />)}
          </div>
          {totalCount > 0 && <Pagination value={currentPage} onChange={handlePageNumberChange} total={pagesCount} />}
        </div>
      </div>
    </div>
  );
};

export default Starred;