import React from 'react';

import {
  CastItem,
  CastImg,
  CastTextName,
  CastTextCharacter,
} from './CastCard.styled.js';

export default function CastItems({ cast_id, profile_path, name, character }) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const DEFAULT_IMG =
    'https://www.pngkey.com/png/full/121-1219231_user-default-profile.png';
  return (
    <CastItem key={cast_id}>
      <CastImg
        alt=""
        src={profile_path ? `${BASE_IMG_URL}${profile_path}` : `${DEFAULT_IMG}`}
        width="200"
        height="300"
      />
      <CastTextName>{name}</CastTextName>
      <CastTextCharacter>
        <b>Character:</b> {character}
      </CastTextCharacter>
    </CastItem>
  );
}
