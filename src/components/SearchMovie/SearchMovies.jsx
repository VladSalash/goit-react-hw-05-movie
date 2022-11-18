import React from 'react';
import PropTypes from 'prop-types';
import SearchMovieItem from './SearchMovieItem';
import { MovieList } from './SearchMovies.styled.js';

export default function SearchMovies({ movieList }) {
  return (
    <MovieList>
      {movieList.map(item => (
        <SearchMovieItem key={item.id} movieId={item.id} title={item.title} />
      ))}
    </MovieList>
  );
}

SearchMovies.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
