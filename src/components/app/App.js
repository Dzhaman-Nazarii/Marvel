import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomCharacter from "../randomCharacter/RandomCharacter";
import CharacterList from "../characterList/CharacterList";
import CharacterInfo from "../characterInfo/CharacterInfo";

import decoration from "../../img/vision.png";

class App extends Component {
  state = {
    selectedCharacted: null,
  };

  onCharacterSelected = (id) => {
    this.setState({ selectedCharacted: id });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <RandomCharacter />
          <div className="character__content">
            <CharacterList onCharacterSelected={this.onCharacterSelected} />
            <CharacterInfo characterId={this.state.selectedCharacted} />
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
