import React from 'react';
import { useLocation, Link } from 'react-router-dom';
function SearchMovieItem({ key, movieId, title }) {
  const location = useLocation();
  return (
    <li key={key}>
      <Link to={`/movies/${movieId}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
}
export default SearchMovieItem;
