import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.scss";
import App from "./components/app/App";
import MarvelService from "./services/MarvelService";

const marvelService = new MarvelService();
marvelService
  .getAllCharacters()
  .then((res) => res.data.results.map(({ name }) => console.log(name)));
// marvelService.getCharacter(1011052).then((res) => console.log(res));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
