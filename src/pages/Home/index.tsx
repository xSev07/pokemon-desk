import React from 'react';
import { navigate } from 'hookrouter';
import Button, { ButtonType } from '../../components/Button';
import Header from '../../components/Header';
import Heading, { HeadingType } from '../../components/Heading';
import Layout from '../../components/Layout';

import Parallax from '../../components/Parallax';
import style from './Home.module.scss';
import { LinkEnum } from '../../routes';

const Home = () => {
  return (
    <div className={style.root}>
      <Header />
      <Layout className={style.contentWrap}>
        <div>
          <Heading className={style.heading} type={HeadingType.h1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p className={style.desc}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button type={ButtonType.TYPE1} onClick={() => navigate(LinkEnum.POKEDEX)}>
            See pokemons
          </Button>
        </div>
        <div className={style.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
