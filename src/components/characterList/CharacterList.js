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
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onLoadedList();
  }

  onLoadedList = () => {
    this.marvelService.getCharacterList().then((data) => {
      this.setState({ characters: data, loading: false });
    });
  };

  onCharacterListLoaded = (characters) => {
    this.setState({
      characters,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  render() {
    const { characters, loading, error } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const characterItems = characters.map(({ id, name, thumbnail }) => (
      <li
        key={id}
        onClick={() => this.props.onCharacterSelected(id)}
        className="character__item"
      >
        <img src={thumbnail} alt={name} />
        <div className="character__name">{name}</div>
      </li>
    ));

    return (
      <div className="character__list">
        <ul className="character__grid">{characterItems}</ul>
        <button className="button button__main button__long">
          <div className="inner">Завантажити ще</div>
        </button>
        {errorMessage}
        {spinner}
      </div>
    );
  }
}

export default CharacterList;
