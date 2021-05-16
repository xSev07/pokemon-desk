import React, { useEffect, useState } from 'react';

import style from './Parallax.module.scss';

import SmallPokeBallPng from './assets/pokeball1.png';
import CloudPng from './assets/cloud1.png';
import PokeBallPng from './assets/pokeball2.png';
import CloudBigPng from './assets/cloud2.png';
import PikachuPng from './assets/pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseEvent = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseEvent);
    return () => window.removeEventListener('mousemove', handleMouseEvent);
  }, [screenX, screenY]);

  return (
    <div className={style.root}>
      <div
        className={style.smallPokeBall}
        style={{
          transform: `translate(${screenY * 0.01}px,${screenX * 0.01}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={style.cloud}
        style={{
          transform: `translate(${screenY * 0.01}px,${screenX * 0.01}px)`,
        }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={style.cloudBig}
        style={{
          transform: `translate(${screenY * 0.03}px,${screenX * 0.04}px)`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>
      <div
        className={style.pokeBall}
        style={{
          transform: `translate(${screenX * -0.02}px,${screenY * -0.01}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={style.pikachu}
        style={{
          transform: `translate(${screenX * 0.01}px,${screenY * 0.01}px)`,
        }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
