import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isInLocalStorage, updateLocalStorage } from "../../utils/local_storage";
import cityIcon from "./assets/city-icon.svg";
import { ReactComponent as StarDefault } from './assets/star-default.svg';
import './card.css';

const Card = ({ vacancy }) => {
  const [starred, setStarred] = useState(false)

  useEffect(() => {
    setStarred(isInLocalStorage(vacancy.id))
  }, [vacancy.id])

  return (
    <div className="card" data-elem={`vacancy-${vacancy.id}`}>
      <div className='vacancy-info'>
        <div className="vacancy-name"><Link to={`/vacancy/${vacancy.id}`} state={vacancy}>{vacancy.profession}</Link></div>
        <div className="vacancy-details">
          <div>з/п от {vacancy.payment_from} {vacancy.currency}</div><div>•</div><div>{vacancy.type_of_work.title}</div>
        </div>
        <div className="vacancy-city">
          <img src={cityIcon} alt="city" /><div>{vacancy.town.title}</div>
        </div>
      </div>
      <button className={`vacancy-star ${starred && 'starred'}`} type='button' onClick={() => updateLocalStorage(vacancy, setStarred)} data-elem={`vacancy-${vacancy.id}-shortlist-button`}><StarDefault /></button>
    </div>
  );
};

export default Card;