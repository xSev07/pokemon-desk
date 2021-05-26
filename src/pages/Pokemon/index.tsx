import React from 'react';

import style from './Pokemon.module.scss';
import Layout from '../../components/Layout';
import Heading, { HeadingType } from '../../components/Heading';

export interface PokemonProps {
  id: string | number;
}

const mockPockemon: any = {
  abilities: ['blaze', 'solar-power'],
  base_experience: 240,
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
  const { img, name } = mockPockemon;
  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        <div className={style.pictureWrap}>
          <img src={img} alt={name} />
        </div>
        <p>
          <span>Grass</span>
          <span>Poison</span>
        </p>
        <div className={style.stats}>
          <div className={style.row}>
            <Heading type={HeadingType.h3} className={style.name}>
              {name}
            </Heading>
            <p className={style.generation}>Generation 1</p>
            <p>{id}</p>
          </div>
          <div>Abilities Overgrow - Chlorophyll</div>
          <div>
            <p>
              Healthy Points
              <br />
              <span>1 000 000</span>
            </p>
            <p>
              Experience
              <br />
              <span>1 000 000</span>
            </p>
          </div>
          <div>
            <div>
              <p>49</p>
              <p>Defence</p>
            </div>
            <div>
              <p>165</p>
              <p>Attack</p>
            </div>
            <div>
              <p>130</p>
              <p>Sp Attack</p>
            </div>
            <div>
              <p>271</p>
              <p>Sp Defense</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Pokemon;
