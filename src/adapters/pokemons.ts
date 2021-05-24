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

// any временно, пока не знаю, как типизировать ответ сервера
export const parsePokemon = (data: any): IPokemon => {
  const { stats } = data;
  return {
    abilities: data.abilities,
    stats: {
      hp: stats.hp,
      attack: stats.attack,
      defense: stats.defense,
      specialAttack: stats['special-attack'],
      specialDefence: stats['special-defense'],
      speed: stats.speed,
    },
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

export const parsePokemons = (data: any): IPokemon[] => {
  return data.map((it: any) => parsePokemon(it));
};
