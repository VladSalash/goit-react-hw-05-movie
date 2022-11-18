import React, { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../api/api.js';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/Review/ReviewCard';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(res => {
      setReviews(res.data.results);
    });
  }, [movieId]);

  return <>{reviews && <ReviewCard reviews={reviews} />}</>;
}
