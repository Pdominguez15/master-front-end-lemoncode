import React from 'react';

//Router
import { useParams, useHistory } from 'react-router-dom';

//API
import * as api from './api';

//Modelo
import { Character, createEmptyCharacter } from './character.vm';

//Mappers
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';

//Componente
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    api
      .getCharacter(id)
      .then((result) => setCharacter(mapCharacterFromApiToVm(result)))
      .catch((error) => {
        console.log({ error });
      });
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);

    api
      .saveCharacter(apiCharacter)
      .then((result) => history.goBack())
      .catch((error) => {
        alert('Error on save character');
      });
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
