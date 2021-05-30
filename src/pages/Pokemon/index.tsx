import React from 'react';

import style from './Pokemon.module.scss';
import Layout from '../../components/Layout';
import Heading, { HeadingType } from '../../components/Heading';

export interface PokemonProps {
  id: string | number;
}

const mockPockemon: any = {
  abilities: ['blaze', 'solar-power'],
  exp: 240,
  height: 17,
  id: 6,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  is_default: true,
  name: 'charizard',
  order: 7,
  stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
  types: ['fire', 'flying'],
  weight: 905,
};

const Pokemon: React.FC<PokemonProps> = (props) => {
  const { id } = props;
  const { img, name, exp, abilities, stats, types } = mockPockemon;
  const { hp, attack, defense, specialAttack, specialDefense } = stats;
  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        <div className={style.pictureWrap}>
          <img src={img} alt={name} />
        </div>
        <p>
          {types.map((it: string) => (
            <span>{it}</span>
          ))}
        </p>
        <div className={style.stats}>
          <div className={style.header}>
            <Heading type={HeadingType.h3} className={style.name}>
              {name}
            </Heading>
            <p className={style.generation}>Generation 1</p>
            <div className={style.id}>{id}</div>
          </div>
          <div className={style.row}>
            <p>Abilities</p>
            {abilities.join(' - ')}
          </div>
          <div className={style.row}>
            <p>
              Healthy Points
              <br />
              <span>{hp}</span>
            </p>
            <p>
              Experience
              <br />
              <span>{exp}</span>
            </p>
          </div>
          <div className={style.row}>
            <div>
              <p>{defense}</p>
              <p>Defence</p>
            </div>
            <div>
              <p>{attack}</p>
              <p>Attack</p>
            </div>
            <div>
              <p>{specialAttack}</p>
              <p>Sp Attack</p>
            </div>
            <div>
              <p>{specialDefense}</p>
              <p>Sp Defense</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Pokemon;
