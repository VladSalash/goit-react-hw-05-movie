import React from 'react';

import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../api/api.js';
import { useParams } from 'react-router-dom';
import CastCard from '../components/Cast/CastCard';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(res => {
      setCast(res.data.cast);
    });
  }, [movieId]);

  return <>{cast && <CastCard cast={cast} />}</>;
}
