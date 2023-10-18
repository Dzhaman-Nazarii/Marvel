import "./CharacterInfo.scss";
import thor from "../../img/thor.jpeg";

const CharacterInfo = () => {
  return (
    <div className="character__info">
      <div className="character__basics">
        <img src={thor} alt="abyss" />
        <div>
          <div className="character__info-name">thor</div>
          <div className="character__btns">
            <a
              href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0"
              className="button button__main"
            >
              <div className="inner">homepage</div>
            </a>
            <a
              href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0"
              className="button button__secondary"
            >
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="character__descr">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </div>
      <div className="character__comics">Comics:</div>
      <ul className="character__comics-list">
        <li className="character__comics-item">
          All-Winners Squad: Band of Heroes (2011) #3
        </li>
        <li className="character__comics-item">Alpha Flight (1983) #50</li>
        <li className="character__comics-item">
          Amazing Spider-Man (1999) #503
        </li>
        <li className="character__comics-item">
          Amazing Spider-Man (1999) #504
        </li>
        <li className="character__comics-item">
          AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
        </li>
        <li className="character__comics-item">
          Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
        </li>
        <li className="character__comics-item">
          Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
        </li>
        <li className="character__comics-item">Vengeance (2011) #4</li>
        <li className="character__comics-item">Avengers (1963) #1</li>
        <li className="character__comics-item">Avengers (1996) #1</li>
      </ul>
    </div>
  );
};

export default CharacterInfo;
