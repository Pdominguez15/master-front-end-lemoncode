import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const url = 'https://rickandmortyapi.com/api/character/';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  //Fetch
  /*const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    //El api devuelve en el data la info(paginacion) y los resultados
    return data.results;
  } else {
    throw Error(response.statusText);
  }*/

  //Axios
  const { data } = await Axios.get(url);
  const { results } = data;
  return results;
};
