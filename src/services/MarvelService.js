class MarvelService {
  apiUrl = "https://gateway.marvel.com:443/v1/public/";
  apiKey = "b5aec3c9b13523af4467b07c337634aa";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(
      `${this.apiUrl}characters?limit=10&offset=210&apikey=${this.apiKey}`
    );
    return res.data.results.map(this.transformCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(
      `${this.apiUrl}characters/${id}?apikey=${this.apiKey}`
    );
    return this.transformCharacter(res.data.results[0]);
  };

  transformCharacter = (character) => {
    return {
      name: character.name,
      description: character.description
        ? `${character.description.slice(0, 210)}...`
        : "Sorry, we don't have description about this character...",
      thumbnail: character.thumbnail.path + "." + character.thumbnail.extension,
      homepage: character.urls[0].url,
      wiki: character.urls[1].url,
    };
  };
}

export default MarvelService;
