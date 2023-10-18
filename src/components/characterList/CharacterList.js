import "./CharacterList.scss";
import abyss from "../../img/abyss.jpg";

const CharacterList = () => {
  return (
    <div className="character__list">
      <ul className="character__grid">
        <li className="character__item">
          <img src={abyss} alt="abyss" />
          <div className="character__name">Abyss</div>
        </li>
        <li className="character__item character__item_selected">
          <img src={abyss} alt="abyss" />
          <div className="character__name">Abyss</div>
        </li>
        <li className="character__item">
          <img src={abyss} alt="abyss" />
          <div className="character__name">Abyss</div>
        </li>
        <li className="character__item">
          <img src={abyss} alt="abyss" />
          <div className="character__name">Abyss</div>
        </li>
        <li className="character__item">
          <img src={abyss} alt="abyss" />
          <div className="character__name">Abyss</div>
        </li>
        <li className="character__item">
          <img src={abyss} alt="abyss" />
          <div className="character__name">Abyss</div>
        </li>
        <li className="character__item">
          <img src={abyss} alt="abyss" />
          <div className="character__name">Abyss</div>
        </li>
        <li className="character__item">
          <img src={abyss} alt="abyss" />
          <div className="character__name">Abyss</div>
        </li>
        <li className="character__item">
          <img src={abyss} alt="abyss" />
          <div className="character__name">Abyss</div>
        </li>
      </ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharacterList;
