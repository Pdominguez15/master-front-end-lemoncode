import {
  CharacterEntityApi,
  getCharacter,
  CharacterEdit,
  updateCharacter,
} from '../db';

interface SaveCharacterArgs {
  character: CharacterEdit;
}
export const resolvers = {
  Query: {
    character: async (parent, args): Promise<CharacterEntityApi> => {
      const character = await getCharacter(args.id);
      return character;
    },
  },
  Mutation: {
    saveCharacter: async (
      parent,
      args: SaveCharacterArgs
    ): Promise<boolean> => {
      await updateCharacter(args.character);

      return true;
    },
  },
};
