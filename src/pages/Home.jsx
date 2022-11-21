import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../api/api.js';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TrendingMovies from '../components/HomeFilmTrending/TrendingMovies';

import { PagesTitle } from './Pages.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus(Status.PENDING);

    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();

        if (trendingMovies.length === 0) {
          setStatus(Status.IDLE);
          return;
        }

        setStatus(Status.RESOLVED);
        setMovies(trendingMovies);
      } catch (error) {
        setStatus(Status.REJECTED);

        return toast.error(`Whoops something went wrong...`);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {status === Status.IDLE && (
        <PagesTitle>
          We don't have popular movies, come back later 😔
        </PagesTitle>
      )}
      {status === Status.RESOLVED && <TrendingMovies movies={movies} />}
    </>
  );
}
