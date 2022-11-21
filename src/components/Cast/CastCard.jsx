import React from 'react';
import { CastContainer, CastList } from './CastCard.styled.js';
import CastItems from './CastItem.jsx';

export default function CastCard({ cast }) {
  return (
    <CastContainer>
      <CastList>
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <CastItems
            key={cast_id}
            profile_path={profile_path}
            name={name}
            character={character}
          />
        ))}
      </CastList>
    </CastContainer>
  );
}
