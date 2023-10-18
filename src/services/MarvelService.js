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

  getAllCharacters = () => {
    return this.getResource(
      `${this.apiUrl}characters?limit=10&offset=210&apikey=${this.apiKey}`
    );
  };

  getCharacter = (id) => {
    return this.getResource(
      `${this.apiUrl}characters/${id}?apikey=${this.apiKey}`
    );
  };
}

export default MarvelService;
