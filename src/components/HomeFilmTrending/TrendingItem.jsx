import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TrendingItem({ id, original_title }) {
  return (
    <li key={id}>
      <NavLink to={`movies/${id}`}>{original_title}</NavLink>
    </li>
  );
}
