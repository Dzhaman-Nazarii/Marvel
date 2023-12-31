import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();
  const apiUrl = "https://gateway.marvel.com:443/v1/public/";
  const apiKey = "b5aec3c9b13523af4467b07c337634aa";
  const baseOffset = 210;

  const getAllCharacters = async () => {
    const res = await request(`${apiUrl}characters?apikey=${apiKey}`);
    return res.data.results.map(transrormListCharacter);
  };

  const getCharacter = async (characterId) => {
    const res = await request(
      `${apiUrl}characters/${characterId}?apikey=${apiKey}`
    );
    return transformCharacter(res.data.results[0]);
  };

  const getCharacterList = async (offset = baseOffset) => {
    const res = await request(
      `${apiUrl}characters?limit=9&offset=${offset}&apikey=${apiKey}`
    );
    return res.data.results.map(transrormListCharacter);
  };

  const getComicsList = async (offset = baseOffset) => {
    const res = await request(
      `${apiUrl}comics?limit=8&offset=${offset}&apikey=${apiKey}`
    );
    return res.data.results.map(transformListComics);
  };

  const getComic = async (id) => {
    const res = await request(`${apiUrl}comics/${id}?apikey=${apiKey}`);
    return transformListComics(res.data.results[0]);
  };

  const transformListComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || "There is no description",
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : "No information about the number of pages",
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || "en-us",
      price: comics.prices[0].price
        ? `${comics.prices[0].price}$`
        : "not available",
    };
  };

  const transrormListCharacter = (character) => {
    return {
      id: character.id,
      name: character.name,
      thumbnail: character.thumbnail.path + "." + character.thumbnail.extension,
    };
  };

  const transformCharacter = (character) => {
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
  return {
    loading,
    error,
    getAllCharacters,
    getCharacter,
    getCharacterList,
    clearError,
    getComicsList,
    getComic,
  };
};

export default useMarvelService;
