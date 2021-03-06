import React from 'react';
import cn from 'classnames';
import Heading, { HeadingType } from '../Heading';

import style from './PokemonCard.module.scss';
import { IPokemon } from '../../interface/pokemons';

interface IPokemonCard {
  pokemon: IPokemon;
  onCardClick: (arg: any) => void;
}

const PokemonCard: React.FC<IPokemonCard> = (props) => {
  const { pokemon, onCardClick } = props;
  const { name, stats, types, img } = pokemon;
  return (
    <div className={style.root} onClick={onCardClick} onKeyPress={onCardClick} role="button" tabIndex={0}>
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
          {types.map((it: string) => (
            <span className={cn(style.label, style[it as keyof typeof style])}>{it}</span>
          ))}
        </div>
      </div>
      <div className={cn(style.pictureWrap, style[types[0] as keyof typeof style])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
