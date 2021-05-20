import React from 'react';

import style from './Pokedex.module.scss';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Heading, { HeadingType } from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import { pokemons } from '../../mocks/data';
import { parsePokemons } from '../../adapters/pokemons';

const parsedPokemons = parsePokemons(pokemons);

const PokedexPage = () => {
  return (
    <div className={style.root}>
      <Header />
      <Layout className={style.contentWrap}>
        <Heading type={HeadingType.h3} className={style.heading}>
          800 <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <input type="text" className={style.search} placeholder="Encuentra tu pokémon..." />
        filters
        <div className={style.pokemonList}>
          {parsedPokemons.map((it) => (
            <PokemonCard pokemon={it} />
          ))}
        </div>
        pagination
      </Layout>
    </div>
  );
};

export default PokedexPage;
