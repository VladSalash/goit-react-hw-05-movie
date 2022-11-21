import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getMoviesById } from '../api/api.js';
import Loader from 'components/Loader/Loader';

import AdditionalInfo from '../components/Info/AdditionalInfo';
import BackLink from '../components/BackLink/BackLink';
import MovieDetails from '../components/MovieDetails/MovieDetails';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus(Status.PENDING);

    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMoviesById(movieId);

        if (!movieDetails) {
          setStatus(Status.IDLE);
          return;
        }

        setStatus(Status.RESOLVED);
        setMovies(movieDetails);
      } catch (error) {
        setStatus(Status.REJECTED);
        return toast.error(`Whoops something went wrong...`);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      {status === Status.IDLE && (
        <h1>We don't have details from this movie </h1>
      )}

      {status === Status.RESOLVED && <MovieDetails movies={movies} />}
      {status === Status.RESOLVED && <AdditionalInfo />}
      {status === Status.RESOLVED && (
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      )}
    </>
  );
}
