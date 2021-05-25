import React from 'react';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = (props) => {
  const { id } = props;
  return <div>{id}</div>;
};

export default Pokemon;
