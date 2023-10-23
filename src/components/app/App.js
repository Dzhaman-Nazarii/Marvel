import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomCharacter from "../randomCharacter/RandomCharacter";
import CharacterList from "../characterList/CharacterList";
import CharacterInfo from "../characterInfo/CharacterInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comicsList/ComicsList";

import decoration from "../../img/vision.png";

const App = () => {
  const [selectedCharacted, setSelectedCharacted] = useState(null);

  const onCharacterSelected = (id) => {
    setSelectedCharacted(id);
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
        <ErrorBoundary>
          <ComicsList />
        </ErrorBoundary>
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
      </main>
    </div>
  );
};

export default App;
