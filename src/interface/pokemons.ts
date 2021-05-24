export interface IPokemon {
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefence: number;
    speed: number;
  };
  types: string[];
  img: string;
  name: string;
  exp: number;
  height: number;
  id: number;
  default: boolean;
  order: number;
  weight: number;
}

export interface IPokemons {
  total: number;
  pokemons: IPokemon[];
}
