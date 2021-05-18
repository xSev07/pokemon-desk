import React from 'react';
import Heading, { HeadingType } from '../Heading';

import style from './PokemonCard.module.scss';
import { Pokemon } from '../../adapters/pokemons';

interface IPokemonCard {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<IPokemonCard> = (props) => {
  const { pokemon } = props;
  const { name, stats } = pokemon;
  return (
    <div className={style.root}>
      <div className={style.infoWrap}>
        <Heading type={HeadingType.h4} className={style.titleName}>
          {name}
        </Heading>
        <div className={style.statWrap}>
          <div className={style.statItem}>
            <div className={style.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={style.statItem}>
            <div className={style.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={style.labelWrap}>
          <span className={style.label}>Fire</span>
        </div>
      </div>
      <div className={style.pictureWrap}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="Charmander"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
