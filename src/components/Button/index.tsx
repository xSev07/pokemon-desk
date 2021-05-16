import React from 'react';
import cn from 'classnames';

import style from './Button.module.scss';

export enum Width {
  Default,
  Fullsize = 'fullsize',
}

export enum Color {
  Green,
  Yellow = 'yellow',
}

export enum Size {
  Default,
  Small = 'small',
}

interface ButtonProps {
  width?: Width;
  color?: Color;
  size?: Size;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { width = Width.Default, color = Color.Green, size = Size.Default, children, onClick } = props;

  const className = cn(style.root, width ? style[width] : '', color ? style[color] : '', size ? style[size] : '');

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
