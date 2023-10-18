import { Component } from "react";
import "./CharacterList.scss";

import MarvelService from "../../services/MarvelService";

class CharacterList extends Component {
  state = {
    characters: [],
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onLoadedList();
  }

  onLoadedList = () => {
    this.marvelService.getCharacterList().then((data) => {
      this.setState({ characters: data });
    });
  };

  render() {
    return (
      <div className="character__list">
        <ul className="character__grid">
          {this.state.characters.map(({ id, name, thumbnail }) => (
            <li key={id} className="character__item">
              <img src={thumbnail} alt={name} />
              <div className="character__name">{name}</div>
            </li>
          ))}
        </ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharacterList;
