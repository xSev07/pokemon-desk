export interface Pokemon {
  abilities: string[];
  stats: { [n: string]: number };
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

// any временно, пока не знаю, как типизировать ответ сервера
export const parsePokemon = (data: any): Pokemon => {
  return {
    abilities: data.abilities,
    stats: data.stats,
    types: data.types,
    img: data.img,
    name: data.name,
    exp: data.base_experience,
    height: data.height,
    id: data.id,
    default: data.is_default,
    order: data.order,
    weight: data.weight,
  };
};

export const parsePokemons = (data: any): Pokemon[] => {
  return data.map((it: any) => parsePokemon(it));
};
