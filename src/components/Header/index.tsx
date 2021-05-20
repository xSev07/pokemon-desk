import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import style from './Header.module.scss';
import { GENERAL_MENU } from '../../routes';

const Header = () => {
  const path = usePath();

  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={style.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={title}
              href={link}
              className={cn(style.menuLink, {
                [style.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
