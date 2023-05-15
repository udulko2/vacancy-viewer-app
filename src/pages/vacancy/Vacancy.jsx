import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { isInLocalStorage, updateLocalStorage } from "../../utils/local_storage";
import cityIcon from "./assets/city-icon.svg";
import { ReactComponent as StarDefault } from './assets/star-default.svg';
import './vacancy.css';

const Vacancy = () => {
  const { id } = useParams()
  const vacancy = useLocation().state
  const [starred, setStarred] = useState(false)

  useEffect(() => {
    setStarred(isInLocalStorage(parseInt(id)))
  }, [id])

  return (
    <div className="vacancy-page">
      <div className="container">
        <div className="vacancy-inner">
          <div className="vacancy-summary-card">
            <div className='vs-info'>
              <div className="vs-name">{vacancy.profession}</div>
              <div className="vs-details">
                <div>з/п от {vacancy.payment_from} {vacancy.currency}</div><div>•</div><div>{vacancy.type_of_work.title}</div>
              </div>
              <div className="vs-city">
                <img src={cityIcon} alt="city" /><div>{vacancy.town.title}</div>
              </div>
            </div>
            <button className={`vs-star ${starred && 'starred'}`} type='button' onClick={() => updateLocalStorage(vacancy, setStarred)}><StarDefault /></button>
          </div>
          <div className="vacancy-description-card" dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}></div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;