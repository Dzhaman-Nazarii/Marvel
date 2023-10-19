import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomCharacter from "../randomCharacter/RandomCharacter";
import CharacterList from "../characterList/CharacterList";
import CharacterInfo from "../characterInfo/CharacterInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

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
          <ErrorBoundary>
            <RandomCharacter />
          </ErrorBoundary>
          <div className="character__content">
            <ErrorBoundary>
              <CharacterList onCharacterSelected={this.onCharacterSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharacterInfo characterId={this.state.selectedCharacted} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
