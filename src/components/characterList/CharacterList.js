import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import "./CharacterList.scss";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

const CharacterList = (props) => {
  const [characters, setCharacters] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [offset, setOffset] = useState(120);
  const [characterEnded, setCharacterEnded] = useState(false);

  const { loading, error, getCharacterList } = useMarvelService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (offset) => {
    setLoadingMore(true);
    getCharacterList(offset).then(onCharacterListLoaded);
  };

  const onCharacterListLoaded = (newCharacters) => {
    let ended = false;
    if (newCharacters.length > 9) {
      ended = true;
    }

    setCharacters((characters) => [...characters, ...newCharacters]);
    setOffset((offset) => offset + 9);
    setLoadingMore(false);
    setCharacterEnded((characterEnded) => ended);
  };

  const itemsRefs = useRef([]);

  const focusOnItem = (id) => {
    itemsRefs.current.forEach((item) =>
      item.classList.remove("character__item_selected")
    );
    itemsRefs.current[id].classList.add("character__item_selected");
    itemsRefs.current[id].focus();
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const characterItems = characters.map((item, i) => (
    <li
      ref={(el) => (itemsRefs.current[i] = el)}
      key={item.id}
      onClick={() => {
        props.onCharacterSelected(item.id);
        focusOnItem(i);
      }}
      onKeyPress={(e) => {
        if (e.key === " " || e.key === "Enter") {
          props.onCharacterSelected(item.id);
          focusOnItem(i);
        }
      }}
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
        <div className="inner" onClick={() => onRequest(offset)}>
          Load more
        </div>
      </button>
      {errorMessage}
      {spinner}
    </div>
  );
};

CharacterList.propTypes = {
  onCharacterSelected: PropTypes.func,
};

export default CharacterList;
