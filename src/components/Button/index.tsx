import React from 'react';
import cn from 'classnames';

import style from './Button.module.scss';

export enum Width {
  Default = 'normalsize',
  Fullsize = 'fullsize',
}

export enum Color {
  Green = 'green',
  Yellow = 'yellow',
}

export enum Size {
  Default = 'normal',
  Small = 'small',
}

interface ButtonProps {
  className?: string;
  width?: Width;
  color?: Color;
  size?: Size;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { width = Width.Default, color = Color.Green, size = Size.Default, children, onClick } = props;

  const className = cn(style.root, style[width], style[color], style[size]);

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
