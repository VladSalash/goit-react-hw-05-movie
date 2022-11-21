import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getMovieByKeyWord } from '../api/api.js';
import SearchMovies from '../components/SearchMovie/SearchMovies';

import Form from '../components/FormSearchMovie/Form';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) {
      return;
    }
    setStatus(Status.PENDING);

    const fetchMovie = async () => {
      try {
        const getMovies = await getMovieByKeyWord(query);

        if (getMovies.length === 0) {
          setStatus(Status.IDLE);
          return toast.warning(` ${query} not found :( `);
        }

        setStatus(Status.RESOLVED);
        setMovies(getMovies);
      } catch (error) {
        setStatus(Status.REJECTED);
        return toast.error(`Whoops something went wrong...`);
      }
    };
    fetchMovie();
  }, [query]);

  return (
    <>
      <Form setSearchParams={setSearchParams} />
      {status === Status.RESOLVED && (
        <SearchMovies movies={movies} location={location} />
      )}
    </>
  );
};
export default Movies;
