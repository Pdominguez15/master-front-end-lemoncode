import { mockCharacters } from './mock-data';
import { CharacterEntityApi, CharacterEdit } from './models';
let characters = [...mockCharacters];

export const getCharacter = async (id: string): Promise<CharacterEntityApi> =>
  characters.find((h) => h.id.toString() === id);

export const updateCharacter = async (
  characterEdit: CharacterEdit
): Promise<boolean> => {
  characters = characters.map((h) =>
    h.id.toString() === characterEdit.id
      ? {
          ...h,
          commentary: characterEdit.commentary,
        }
      : h
  );

  return true;
};
