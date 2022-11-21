import { useState, useEffect } from 'react';
import { getMovieReviews } from '../api/api.js';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/Review/ReviewCard';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus(Status.PENDING);

    const fetchMovieReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId);

        if (movieReviews.length === 0) {
          setStatus(Status.IDLE);
          return;
        }

        setStatus(Status.RESOLVED);
        setReviews(movieReviews);
      } catch (error) {
        setStatus(Status.REJECTED);
        return toast.error(`Whoops something went wrong...`);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {status === Status.IDLE && (
        <h1>We dont have any reviews for this movie </h1>
      )}

      {reviews && <ReviewCard reviews={reviews} />}
    </div>
  );
}
