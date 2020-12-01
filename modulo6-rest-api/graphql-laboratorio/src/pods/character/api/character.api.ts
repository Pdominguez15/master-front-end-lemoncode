import Axios from 'axios';
import { graphaqlClient, graphaqlClientMock } from 'core/graphql';
import { gql } from 'graphql-request';
import { Character } from './character.api-model';

interface GetCharacterCollection {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  //Del graphql real

  const query = gql`
   query {
  character(id: ${id}) {
    id
    name
    status
    species
    gender
  }
}
  `;
  const resultadoReal = await graphaqlClient.request<GetCharacterCollection>(
    query
  );

  //Del server mock
  const queryMock = gql`
   query {
  character(id: ${id}) {
    id
    name
    status
    species
    gender
    commentary
  }
}
  `;

  const resultadoMock = await graphaqlClientMock.request<GetCharacterCollection>(
    queryMock
  );
  if (resultadoMock.character.hasOwnProperty('commentary')) {
    return {
      ...resultadoMock.character,
      commentary: resultadoMock.character.commentary,
    };
  } else {
    return { ...resultadoReal.character, commentary: '' };
  }
};

interface SaveCharacterResponse {
  saveCharacter: boolean;
}
export const saveCharacter = async (character: Character): Promise<boolean> => {
  const query = `
  mutation($character: CharacterInput!) {
    saveCharacter(character: $character)
  }
`;
  const {
    saveCharacter,
  } = await graphaqlClientMock.request<SaveCharacterResponse>(query, {
    character,
  });
  return saveCharacter;
};
