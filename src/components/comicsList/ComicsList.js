import "./ComicsList.scss";
import uw from "../../img/UW.png";
import xMen from "../../img/x-men.png";

const ComicsList = () => {
  return (
    <div className="comics__list">
      <ul className="comics__grid">
        <li className="comics__item">
          <a href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
            <img src={uw} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
            <img src={xMen} alt="x-men" className="comics__item-img" />
            <div className="comics__item-name">X-Men: Days of Future Past</div>
            <div className="comics__item-price">NOT AVAILABLE</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
            <img src={uw} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
            <img src={xMen} alt="x-men" className="comics__item-img" />
            <div className="comics__item-name">X-Men: Days of Future Past</div>
            <div className="comics__item-price">NOT AVAILABLE</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
            <img src={uw} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
            <img src={xMen} alt="x-men" className="comics__item-img" />
            <div className="comics__item-name">X-Men: Days of Future Past</div>
            <div className="comics__item-price">NOT AVAILABLE</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
            <img src={uw} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
            <img src={xMen} alt="x-men" className="comics__item-img" />
            <div className="comics__item-name">X-Men: Days of Future Past</div>
            <div className="comics__item-price">NOT AVAILABLE</div>
          </a>
        </li>
      </ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
