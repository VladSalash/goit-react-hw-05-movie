import React from 'react';
import { Link } from 'react-router-dom';

export default function TrendingItem({ key, moviesId, moviesTitle }) {
  return (
    <li key={key}>
      <Link to={`/movies/${moviesId}`}>{moviesTitle}</Link>
    </li>
  );
}
