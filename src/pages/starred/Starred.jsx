import { Pagination } from '@mantine/core';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import './starred.css';

const Starred = () => {
  return (
    <div className="starred-page">
      <div className="container">
        <div className="starred-inner">
          <div className="starred-cards">
            <Link to={'/vacancy'}><Card /></Link>
            <Link to={'/vacancy'}><Card /></Link>
            <Link to={'/vacancy'}><Card /></Link>
            <Link to={'/vacancy'}><Card /></Link>
          </div>
          <Pagination total={10} />
        </div>
      </div>
    </div>
  );
};

export default Starred;