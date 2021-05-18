import React from 'react';
import { navigate } from 'hookrouter';
import Button, { ButtonType } from '../../components/Button';
import { LinkEnum } from '../../routes';
import TeamRocket from './assets/TeamRocket.png';

import style from './NotFound.module.scss';

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
          <Button type={ButtonType.TYPE2} onClick={() => navigate(LinkEnum.HOME)}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
