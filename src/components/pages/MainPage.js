import { useState } from "react";

import RandomCharacter from "../randomCharacter/RandomCharacter";
import CharacterList from "../characterList/CharacterList";
import CharacterInfo from "../characterInfo/CharacterInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from "../../img/vision.png";

const MainPage = () => {
  const [selectedCharacted, setSelectedCharacted] = useState(null);

  const onCharacterSelected = (id) => {
    setSelectedCharacted(id);
  };

  return (
    <>
      <ErrorBoundary>
        <RandomCharacter />
      </ErrorBoundary>
      <div className="character__content">
        <ErrorBoundary>
          <CharacterList onCharacterSelected={onCharacterSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharacterInfo characterId={selectedCharacted} />
        </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
