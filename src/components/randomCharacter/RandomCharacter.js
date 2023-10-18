import { Component } from "react";

import "./RandomCharacter.scss";
import mjolnir from "../../img/mjolnir.png";

import MarvelService from "../../services/MarvelService";

class RandomCharacter extends Component {
  constructor(props) {
    super(props);
    this.updateCharacter();
  }
  state = {
    character: {},
  };

  marvelService = new MarvelService();

  onCharacterLoaded = (character) => {
    this.setState({ character });
  };

  updateCharacter = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService.getCharacter(id).then(this.onCharacterLoaded);
  };

  render() {
    const {
      character: { name, description, thumbnail, homepage, wiki },
    } = this.state;

    return (
      <div className="randomcharacter">
        <div className="randomcharacter__block">
          <img src={thumbnail} alt={name} className="randomcharacter__img" />
          <div className="randomcharacter__info">
            <p className="randomcharacter__name">{name}</p>
            <p className="randomcharacter__descr">{description}</p>
            <div className="randomcharacter__btns">
              <a href={homepage} className="button button__main">
                <div className="inner">homepage</div>
              </a>
              <a href={wiki} className="button button__secondary">
                <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
        </div>
        <div className="randomcharacter__static">
          <p className="randomcharacter__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomcharacter__title">Or choose another one</p>
          <button className="button button__main">
            <div className="inner">try it</div>
          </button>
          <img
            src={mjolnir}
            alt="mjolnir"
            className="randomcharacter__decoration"
          />
        </div>
      </div>
    );
  }
}

export default RandomCharacter;
