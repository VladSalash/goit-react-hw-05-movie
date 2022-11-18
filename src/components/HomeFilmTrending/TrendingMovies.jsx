import React from 'react';
import TrendingItem from './TrendingItem';
export default function TrendingMovies({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <TrendingItem
          key={movie.id}
          moviesId={movie.id}
          moviesTitle={movie.original_title}
        />
      ))}
    </ul>
  );
}
