import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
function SearchMovieItem({ id, original_title }) {
  const location = useLocation();
  return (
    <li key={id}>
      <NavLink to={`${id}`} state={{ from: location }}>
        {original_title}
      </NavLink>
    </li>
  );
}
export default SearchMovieItem;
