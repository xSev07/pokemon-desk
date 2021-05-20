import React, { useEffect, useState } from 'react';

import style from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import Heading, { HeadingType } from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import { pokemons } from '../../mocks/data';
import { parsePokemons } from '../../adapters/pokemons';

const parsedPokemons = parsePokemons(pokemons);

const usePokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons')
        const result = await response.json();

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPokemons();
  }, []);
  return {
    data: {
      ...data,
      pokemons: parsePokemons(data.pokemons),
    },
    isLoading,
    isError,
  }
}


const PokedexPage = () => {
  const {data, isLoading, isError} = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error!</div>
  }
  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        <Heading type={HeadingType.h3} className={style.heading}>
          {data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <input type="text" className={style.search} placeholder="Encuentra tu pokémon..." />
        filters
        <div className={style.pokemonList}>
          {data.pokemons.map((it) => (
            <PokemonCard pokemon={it} />
          ))}
        </div>
        pagination
      </Layout>
    </div>
  );
};

export default PokedexPage;
