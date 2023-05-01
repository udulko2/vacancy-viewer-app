import cityIcon from "./assets/city-icon.svg";
import { ReactComponent as StarDefault } from './assets/star-default.svg';
import './card.css';

const Card = () => {
  return (
    <div className="card">
      <div className='vacancy-info'>
        <div className="vacancy-name">Менеджер-дизайнер</div>
        <div className="vacancy-details">
          <div>з/п от 70000 rub</div><div>•</div><div>Полный рабочий день</div>
        </div>
        <div className="vacancy-city">
          <img src={cityIcon} alt="city" /><div>Новый Уренгой</div>
        </div>
      </div>
      <button className='vacancy-star' type='button'><StarDefault /></button>
    </div>
  );
};

export default Card;