import React from 'react';

import { CastItem } from './CastCard.styled.js';

export default function CastItems({ original, profile, name, character }) {
  return (
    <CastItem>
      <img
        alt={original}
        src={`https://image.tmdb.org/t/p/w500/${profile}`}
        width="100px"
      ></img>
      <h3>{name}</h3>
      <p>{character}</p>
    </CastItem>
  );
}
