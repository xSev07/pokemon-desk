import React from 'react';
import cn from 'classnames';

import style from './Heading.module.scss';

export enum Type {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  Paragraph = 'p',
}

interface HeadingProps {
  className?: string;
  type: Type;
}

const Heading: React.FC<HeadingProps> = (props) => {
  const { type, children, ...otherProps } = props;
  const extendedProps = {
    ...otherProps,
    className: cn(style[type], otherProps.className),
  };
  return React.createElement(`${type}`, extendedProps, children);
};

export default Heading;
