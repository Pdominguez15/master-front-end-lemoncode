import * as React from 'react';

//API
import { getCharacterCollection } from './api';

//Modelo
import { CharacterEntityVm } from './character-collection.vm';

//Mappers
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection()
      .then((result) =>
        setCharacterCollection(mapToCollection(result, mapFromApiToVm))
      )
      .catch((error) => {
        console.log({ error });
      });
  };

  return { characterCollection, loadCharacterCollection };
};
