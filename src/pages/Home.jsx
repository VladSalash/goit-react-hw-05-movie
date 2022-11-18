import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from '../api/api.js';
import TrendingMovies from '../components/HomeFilmTrending/TrendingMovies';

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMoviesTrending().then(res => {
      setMovies(res.data.results);
    });
  }, []);

  return <>{movies && <TrendingMovies movies={movies} />}</>;
}
