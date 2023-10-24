import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ComicsList.scss";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [offset, setOffset] = useState(120);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { loading, error, getComicsList } = useMarvelService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (offset) => {
    setLoadingMore(true);
    getComicsList(offset).then(onComicsListLoaded);
  };

  const onComicsListLoaded = (newComics) => {
    let ended = false;
    if (newComics.length > 8) {
      ended = true;
    }

    setComics((comics) => [...comics, ...newComics]);
    setOffset((offset) => offset + 8);
    setLoadingMore(false);
    setComicsEnded((comicsEnded) => ended);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const comicsItems = comics.map(({ id, title, thumbnail, price }) => (
    <li key={id} className="comics__item">
      <Link to={`/comics/${id}`}>
        <img src={thumbnail} alt={title} className="comics__item-img" />
        <div className="comics__item-name">{title}</div>
        <div className="comics__item-price">{price}</div>
      </Link>
    </li>
  ));

  return (
    <div className="comics__list">
      <ul className="comics__grid">{comicsItems}</ul>
      <button
        disabled={loadingMore}
        className="button button__main button__long"
        style={{ display: comicsEnded ? "none" : "block" }}
      >
        <div onClick={() => onRequest(offset)} className="inner">
          load more
        </div>
      </button>
      {errorMessage}
      {spinner}
    </div>
  );
};

export default ComicsList;
