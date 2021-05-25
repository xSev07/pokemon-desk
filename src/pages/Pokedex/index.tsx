import React, { useState } from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/Layout';
import Heading, { HeadingType } from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import useDebounce from '../../hook/useDebounce';
import useData from '../../hook/getData';
import { IPokemons } from '../../interface/pokemons';
import { parsePokemons } from '../../adapters/pokemons';
import { LinkEnum } from '../../routes';

import style from './Pokedex.module.scss';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedValue = useDebounce(searchValue, 500);
  const [query, setQuery] = useState<IQuery>({});
  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const parsedPokemons = data && parsePokemons(data.pokemons);

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setQuery((state) => ({
      ...state,
      name: evt.target.value,
    }));
  };

  const handleCardClick = (id: number) => {
    navigate(LinkEnum.POKEMON.replace(':id', String(id)));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }
  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        <Heading type={HeadingType.h3} className={style.heading}>
          {data && data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <input
          type="text"
          className={style.search}
          placeholder="Encuentra tu pokémon..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        filters
        <div className={style.pokemonList}>
          {parsedPokemons &&
            parsedPokemons.map((it) => (
              <PokemonCard key={it.id} pokemon={it} onCardClick={() => handleCardClick(it.id)} />
            ))}
        </div>
        pagination
      </Layout>
    </div>
  );
};

export default PokedexPage;
