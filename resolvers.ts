import { characters } from "./data.ts";
import type { Character } from "./types.ts";

export const resolvers = {
  Query: {
    getCharacter: (_: unknown, args: { id: string }): Character | null =>
      characters.find((c) => c.id === args.id) ?? null,

    getCharacters: (_: unknown, args: { ids?: string[] }): Character[] => {
      if (!args.ids || args.ids.length === 0) return characters;
      return characters.filter((c) => args.ids!.includes(c.id));
    },
  },
  Character: {
    house: (parent: Character) => parent.house,
  },
  House: {
    characters: (parent: { name: string | undefined; }) =>
      characters.filter((c) => c.house?.name === parent.name),
  },
};