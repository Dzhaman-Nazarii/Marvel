class MarvelService {
  apiUrl = "https://gateway.marvel.com:443/v1/public/";
  apiKey = "b5aec3c9b13523af4467b07c337634aa";
  baseOffset = 210;

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(
      `${this.apiUrl}characters?apikey=${this.apiKey}`
    );
    return res.data.results.map(this.transrormListCharacter);
  };

  getCharacter = async (characterId) => {
    const res = await this.getResource(
      `${this.apiUrl}characters/${characterId}?apikey=${this.apiKey}`
    );
    return this.transformCharacter(res.data.results[0]);
  };

  getCharacterList = async (offset = this.baseOffset) => {
    const res = await this.getResource(
      `${this.apiUrl}characters?limit=9&offset=${offset}&apikey=${this.apiKey}`
    );
    return res.data.results.map(this.transrormListCharacter);
  };

  transrormListCharacter = (character) => {
    return {
      id: character.id,
      name: character.name,
      thumbnail: character.thumbnail.path + "." + character.thumbnail.extension,
    };
  };

  transformCharacter = (character) => {
    return {
      name: character.name,
      description: character.description
        ? `${character.description.slice(0, 210)}...`
        : "Sorry, we don't have a description for this character.",
      thumbnail: character.thumbnail.path + "." + character.thumbnail.extension,
      homepage: character.urls[0].url,
      wiki: character.urls[1].url,
      comics: character.comics.items,
    };
  };
}

export default MarvelService;
