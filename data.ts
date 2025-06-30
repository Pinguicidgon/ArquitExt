import type { Character, House } from "./types.ts";

const houses: House[] = [
  { name: "Gryffindor", characters: [] },
  { name: "Slytherin", characters: [] },
  { name: "Ravenclaw", characters: [] },
  { name: "Hufflepuff", characters: [] },
];

export const characters: Character[] = [
  {
    id: "1",
    name: "Harry Potter",
    alternate_names: ["The Boy Who Lived", "The Chosen One"],
    species: "human",
    gender: "male",
    house: houses[0],
  },
  {
    id: "2",
    name: "Hermione Granger",
    alternate_names: ["Brightest Witch of Her Age"],
    species: "human",
    gender: "female",
    house: houses[0],
  },
  {
    id: "3",
    name: "Draco Malfoy",
    alternate_names: ["The Slytherin Prince"],
    species: "human",
    gender: "male",
    house: houses[1],
  },
  {
    id: "4",
    name: "Luna Lovegood",
    alternate_names: ["Loony Lovegood"],
    species: "human",
    gender: "female",
    house: houses[2],
  },
  {
    id: "5",
    name: "Cedric Diggory",
    alternate_names: ["The Hufflepuff Champion"],
    species: "human",
    gender: "male",
    house: houses[3],
  },
  {
    id: "6",
    name: "Dobby",
    alternate_names: ["The Free Elf"],
    species: "house-elf",
    gender: "male",
    house: null,
  },
];

houses.forEach((h) => {
  h.characters = characters.filter((c) => c.house?.name === h.name);
});