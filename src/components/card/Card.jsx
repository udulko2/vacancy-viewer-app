import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cityIcon from "./assets/city-icon.svg";
import { ReactComponent as StarDefault } from './assets/star-default.svg';
import './card.css';

const Card = ({ vacancy }) => {
  const [starred, setStarred] = useState(false)
  const LS_KEY = "vacancy-viewer-stars"

  useEffect(() => {
    const starsArray = JSON.parse(localStorage.getItem(LS_KEY))
    if (starsArray) {
      const included = starsArray.some(el => el.id === vacancy.id)
      setStarred(included)
    }
  }, [])

  const vacancyLite = {
    id: vacancy.id, profession: vacancy.profession,
    payment_from: vacancy.payment_from, currency: vacancy.currency,
    type_of_work: { title: vacancy.type_of_work.title }, town: { title: vacancy.town.title }
  }

  function handleStarClick() {
    let starsArray = JSON.parse(localStorage.getItem(LS_KEY))
    if (starsArray) {
      const index = starsArray.findIndex(el => el.id === vacancy.id)
      if (index > -1) {
        starsArray.splice(index, 1)
        setStarred(false)
      } else {
        starsArray.push(vacancyLite)
        setStarred(true)
      }
    } else {
      starsArray = [vacancyLite]
      setStarred(true)
    }
    localStorage.setItem(LS_KEY, JSON.stringify(starsArray))
  }

  return (
    <div className="card">
      <div className='vacancy-info'>
        <div className="vacancy-name"><Link to={`/vacancy/${vacancy.id}`}>{vacancy.profession}</Link></div>
        <div className="vacancy-details">
          <div>з/п от {vacancy.payment_from} {vacancy.currency}</div><div>•</div><div>{vacancy.type_of_work.title}</div>
        </div>
        <div className="vacancy-city">
          <img src={cityIcon} alt="city" /><div>{vacancy.town.title}</div>
        </div>
      </div>
      <button className={`vacancy-star ${starred && 'starred'}`} type='button' onClick={handleStarClick}><StarDefault /></button>
    </div>
  );
};

export default Card;