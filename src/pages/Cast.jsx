import React from 'react';

import { useState, useEffect } from 'react';
import { getMovieCast } from '../api/api.js';
import { useParams } from 'react-router-dom';
import CastCard from '../components/Cast/CastCard';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus(Status.PENDING);

    const fetchMovieCast = async () => {
      try {
        const movieCast = await getMovieCast(movieId);

        if (movieCast.length === 0) {
          setStatus(Status.IDLE);
          return;
        }

        setStatus(Status.RESOLVED);
        setCast(movieCast);
      } catch (error) {
        setStatus(Status.REJECTED);
        return toast.error(`Whoops something went wrong...`);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {status === Status.IDLE && <h1>We dont have any cast for this movie </h1>}
      {cast && <CastCard cast={cast} />}
    </div>
  );
}
