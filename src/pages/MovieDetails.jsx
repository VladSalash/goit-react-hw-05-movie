import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../api/api.js';
import MoviePublic from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => {
      setMovie(res.data);
    });
  }, [movieId]);

  const path = location?.state?.from ?? '/';

  // const padding = {
  //   paddingLeft: 20,
  // };

  return (
    <>
      <Link to={path}>
        <button>👈 Go back</button>
      </Link>
      {movie && <MoviePublic movie={movie} />}
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: path }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: path }}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
