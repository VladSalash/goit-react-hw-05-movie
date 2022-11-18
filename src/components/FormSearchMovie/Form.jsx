import React, { useState } from 'react';
import { fetchSearchMovies } from '../../api/api.js';
import SearchMovies from '../SearchMovie/SearchMovies';

export default function Form() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieList, setMovieList] = useState(null);

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
  };

  fetchSearchMovies(searchQuery).then(res => {
    setMovieList(res.data.results);
  });
  const input = {
    paddingLeft: 20,
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" style={input}>
        <input
          type="text"
          name="searchQuery"
          onChange={handleChange}
          value={searchQuery}
        ></input>
        <button type="submit">Search</button>
      </form>
      <div>{movieList && <SearchMovies movieList={movieList} />}</div>
    </div>
  );
}
