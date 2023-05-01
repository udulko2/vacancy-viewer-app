import cityIcon from "./assets/city-icon.svg";
import { ReactComponent as StarDefault } from './assets/star-default.svg';
import './vacancy.css';

const Vacancy = () => {
  return (
    <div className="vacancy-page">
      <div className="container">
        <div className="vacancy-inner">
          <div className="vacancy-summary-card">
            <div className='vs-info'>
              <div className="vs-name">Менеджер-дизайнер</div>
              <div className="vs-details">
                <div>з/п от 70000 rub</div><div>•</div><div>Полный рабочий день</div>
              </div>
              <div className="vs-city">
                <img src={cityIcon} alt="city" /><div>Новый Уренгой</div>
              </div>
            </div>
            <button className='vs-star' type='button'><StarDefault /></button>
          </div>
          <div className="vacancy-description-card">
            <div>Обязанности:</div>
            <p>
              Разработка дизайн-макетов для наружной, интерьерной рекламы, полиграфии, сувенирной продукции.<br />
              Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop.<br />
              Создание дизайна логотипов и брендбуков<br />
              Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка<br />
            </p>
            <div>Требования:</div>
            <p>
              Собеседование – после успешного прохождения тестового задания<br />
              Рассматриваются кандидаты только с опытом работы<br />
              Обязательно - наличие портфолио<br />
              Умение самостоятельно принимать решения, умение объективно оценивать свою работу, работать в режиме многозадачности и переключаться с одного задания к другому и планировать свой день. Соблюдать сроки.<br />
              Ответственный, исполнительный, целеустремленный, большим плюсом будет опыт управления<br />
            </p>
            <div>Условия:</div>
            <p>
              Оформление по контракту<br />
              Полный социальный пакет<br />
              Премирование по результатам работы<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;