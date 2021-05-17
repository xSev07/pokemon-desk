import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Heading, { Type } from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import style from './Home.module.scss';

const Home = () => {
  return (
    <div className={style.root}>
      <Header />
      <Layout className={style.contentWrap}>
        <div>
          <Heading className={style.heading} type={Type.h1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p className={style.desc}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => {}}>See pokemons</Button>
        </div>
        <div className={style.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
