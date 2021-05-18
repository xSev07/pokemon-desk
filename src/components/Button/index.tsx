import React from 'react';
import cn from 'classnames';

import style from './Button.module.scss';

export enum ButtonType {
  TYPE1 = 'type1',
  TYPE2 = 'type2',
}

interface ButtonProps {
  className?: string;
  type: ButtonType;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type, children, onClick } = props;

  const className = cn(style.root, style[type]);

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
