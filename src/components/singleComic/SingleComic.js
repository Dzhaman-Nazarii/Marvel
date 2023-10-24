import "./SingleComic.scss";
import xMen from "../../img/x-men.png";

const SingleComic = () => {
  return (
    <div className="single-comic">
      <img src={xMen} alt="x-men" className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">X-Men: Days of Future Past</h2>
        <p className="single-comic__descr">
          Re-live the legendary first journey
        </p>
        <p className="single-comic__descr">144 pages</p>
        <p className="single-comic__descr">Language: en-us</p>
        <div className="single-comic__price">9.99$</div>
      </div>
      <a
        href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0"
        className="single-comic__back"
      >
        Back to all
      </a>
    </div>
  );
};

export default SingleComic;
