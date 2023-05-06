import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import EmptyState from '../../components/empty/EmptyState';
import './empty.css';

const Empty = () => {
  console.log("EMPTY PAGE ENTRY");

  const sourcePage = useSearchParams()[0].get("source_page")

  useEffect(() => {
    console.log("EMPTY PAGE MOUNT! ");

    return () => {
      console.log("EMPTY PAGE UNMOUNT! ");
    }
  }, [])

  let message = ""

  if (sourcePage === "search")
    message = "По вашему запросу ничего не найдено!"
  else if (sourcePage === "starred")
    message = "Упс, здесь еще ничего нет!"
  else
    message = "Empty State"

  return (
    <div className="empty-page">
      <div className="container">
        <div className="empty-inner">
          <EmptyState message={message} sourcePage={sourcePage} />
        </div>
      </div>
    </div>
  );
};

export default Empty;