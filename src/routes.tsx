import React from 'react';

import Home from './pages/Home';
import EmptyPage from './pages/Empty';

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <EmptyPage title="Pokédex" />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <EmptyPage title="Documentation" />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, it: IGeneralMenu) => {
  acc[it.link] = it.component;
  return acc;
}, {});

export default routes;
