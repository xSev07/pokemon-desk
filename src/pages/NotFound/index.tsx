import React from 'react';
import { navigate } from 'hookrouter';
import Button, { Color } from '../../components/Button';

import style from './NotFound.module.scss';

import TeamRocket from './assets/TeamRocket.png';

const NotFoundPage = () => {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.text}>404</div>
        <div className={style.layer}>
          <img src={TeamRocket} alt="Team Rocket" />
          <div className={style.subTitle}>
            <span>The rocket team</span> has won this time.
          </div>
          <Button color={Color.Yellow} onClick={() => navigate('/')}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
