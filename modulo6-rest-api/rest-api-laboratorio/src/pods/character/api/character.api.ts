import Axios from 'axios';
import { Character } from './character.api-model';

const characterListUrl = 'https://rickandmortyapi.com/api/character/';
const characterListUrlMock = '/api/character/';

export const getCharacter = async (id: string): Promise<Character> => {
  //Fetch
  /*const response = await fetch(`${characterListUrl}/${id}`);
  if (response.ok) {
    const data = await response.json();
    //El api devuelve en el data la info(paginacion) y los resultados
    return data;
  } else {
    throw Error(response.statusText);
  }
*/
  //Axios
  /*const { data } = await Axios.get<Character>(`${characterListUrl}/${id}`);
  return data;

*/
  //Ejercicio 2 usamos la api real y mi api mock para tener una propiedad comentario
  //Esta vamos a poder modificarla llamando al api mock

  //Del api real
  const resultApiReal = await Axios.get<Character>(`${characterListUrl}/${id}`);
  const characterApiReal = resultApiReal.data;
  //Del server mock
  const resultApiMock = await Axios.get<Character>(
    `${characterListUrlMock}/${id}`
  );
  const characterApiMock = resultApiMock.data;
  if (characterApiMock.hasOwnProperty('commentary')) {
    return { ...characterApiReal, commentary: characterApiMock.commentary };
  } else {
    return { ...characterApiReal, commentary: '' };
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  /*
  //Fetch
  if (character.id) {
    await fetch(`${characterListUrlMock}/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
  } else {
    await fetch(characterListUrlMock, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
  }
  return true;
*/
  //Axios
  if (character.id) {
    await Axios.put<Character>(
      `${characterListUrlMock}/${character.id}`,
      character
    );
  } else {
    await Axios.post<Character>(characterListUrlMock, character);
  }
  return true;
};
