import * as React from 'react';

//Router
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';

//Hook
import { useCharacterCollection } from './character-collection.hook';

//Componente
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const {
    characterCollection,
    loadCharacterCollection,
  } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleEdit = (id: string) => {
    history.push(linkRoutes.detailCharacter(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onEdit={handleEdit}
    />
  );
};
