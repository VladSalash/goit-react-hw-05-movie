import React from 'react';
import { CastList } from './CastCard.styled.js';
import CastItems from './CastItem.jsx';
export default function CastCard({ cast }) {
  return (
    <CastList>
      {cast.map(item => (
        <CastItems
          key={item.id}
          original={item.original_name}
          profile={item.profile_path}
          name={item.name}
          character={item.character}
        />
      ))}
    </CastList>
  );
}
