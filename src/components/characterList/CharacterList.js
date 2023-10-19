import PropTypes from "prop-types";
import { Component } from "react";
import "./CharacterList.scss";

import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

class CharacterList extends Component {
  state = {
    characters: [],
    loading: true,
    error: false,
    loadingMore: false,
    offset: 210,
    characterEnded: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onLoadingMore();
    this.marvelService
      .getCharacterList(offset)
      .then(this.onCharacterListLoaded)
      .catch(this.onError);
  };

  onLoadingMore = () => {
    this.setState({ loadingMore: true });
  };

  onCharacterListLoaded = (newCharacters) => {
    let ended = false;
    if (newCharacters.length > 9) {
      ended = true;
    }

    this.setState(({ offset, characters }) => ({
      characters: [...characters, ...newCharacters],
      loading: false,
      loadingMore: false,
      offset: offset + 9,
      characterEnded: ended,
    }));
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  render() {
    const { characters, loading, error, loadingMore, offset, characterEnded } =
      this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const characterItems = characters.map((item, i) => (
      <li
        key={i}
        onClick={() => this.props.onCharacterSelected(item.id)}
        className="character__item"
      >
        <img src={item.thumbnail} alt={item.name} />
        <div className="character__name">{item.name}</div>
      </li>
    ));

    return (
      <div className="character__list">
        <ul className="character__grid">{characterItems}</ul>
        <button
          className="button button__main button__long"
          disabled={loadingMore}
          style={{ display: characterEnded ? "none" : "block" }}
        >
          <div className="inner" onClick={() => this.onRequest(offset)}>
            Load more
          </div>
        </button>
        {errorMessage}
        {spinner}
      </div>
    );
  }
}

CharacterList.propTypes = {
  onCharacterSelected: PropTypes.func,
};

export default CharacterList;
