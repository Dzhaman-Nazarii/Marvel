import PropTypes from "prop-types";

import { Component } from "react";
import "./CharacterInfo.scss";

import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../sceleton/Sceleton";

class CharacterInfo extends Component {
  state = {
    character: null,
    loading: false,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateDetailCharacter();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.characterId !== prevProps.characterId) {
      this.updateDetailCharacter();
    }
  }

  updateDetailCharacter = () => {
    const { characterId } = this.props;
    if (!characterId) return;
    this.onCharacterLoading();
    this.marvelService
      .getCharacter(characterId)
      .then(this.onCharacterLoaded)
      .catch(this.onError);
  };

  onCharacterLoaded = (character) => {
    this.setState({ character, loading: false });
  };

  onCharacterLoading = () => {
    this.setState({ loading: true });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  render() {
    const { character, loading, error } = this.state;

    const skeleton = character || loading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !character) ? (
      <View character={character} />
    ) : null;

    return (
      <div className="character__info">
        {skeleton}
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const View = ({ character }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = character;

  let imgStyle = { objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "contain" };
  }

  return (
    <>
      <div className="character__basics">
        <img src={thumbnail} style={imgStyle} alt={name} />
        <div>
          <div className="character__info-name">{name}</div>
          <div className="character__btns">
            <a href={wiki} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={homepage} className="button button__secondary">
              <div className="inner">wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="character__descr">{description}</div>
      <div className="character__comics">Comics:</div>
      <ul className="character__comics-list">
        {comics.length > 0
          ? null
          : "There are no comics available for this character."}
        {comics.slice(0, 10).map((item, i) => (
          <li key={i} className="character__comics-item">
            <a href={item.resourceURI}>{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

CharacterInfo.propTypes = {
  characterId: PropTypes.number,
};

export default CharacterInfo;
