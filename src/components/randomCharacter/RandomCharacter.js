import { Component } from "react";

import "./RandomCharacter.scss";
import mjolnir from "../../img/mjolnir.png";

import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class RandomCharacter extends Component {
  state = {
    character: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateCharacter();
  }

  onCharacterLoaded = (character) => {
    this.setState({ character, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateCharacter = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService
      .getCharacter(id)
      .then(this.onCharacterLoaded)
      .catch(this.onError);
  };

  render() {
    const { character, loading, error } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || loading) ? (
      <View character={character} />
    ) : null;

    return (
      <div className="randomcharacter">
        {errorMessage}
        {spinner}
        {content}
        <div className="randomcharacter__static">
          <p className="randomcharacter__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomcharacter__title">Or choose another one</p>
          <button
            onClick={this.updateCharacter}
            className="button button__main"
          >
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

const View = ({ character }) => {
  const { name, description, thumbnail, homepage, wiki } = character;
  let imgStyle = { objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "contain" };
  }
  return (
    <div className="randomcharacter__block">
      <img
        src={thumbnail}
        style={imgStyle}
        alt={name}
        className="randomcharacter__img"
      />
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
  );
};

export default RandomCharacter;
