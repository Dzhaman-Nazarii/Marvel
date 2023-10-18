import AppHeader from "../appHeader/AppHeader";
import RandomCharacter from "../randomCharacter/RandomCharacter";
import CharacterList from "../characterList/CharacterList";
import CharacterInfo from "../characterInfo/CharacterInfo";

import decoration from "../../img/vision.png";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomCharacter />
        <div className="character__content">
          <CharacterList />
          <CharacterInfo />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};

export default App;
