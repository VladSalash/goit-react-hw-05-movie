import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchMovies } from '../api/api.js';

import Form from '../components/FormSearchMovie/Form';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [, setMovieList] = useState(null);
  const query = searchParams.get('query');

  useEffect(() => {
    if (query !== null) {
      setSearchQuery(query);
      fetchSearchMovies(query).then(res => {
        setMovieList(res.data.results);
      });
    }
  }, [query]);

  setSearchParams(`query=${searchQuery}`);

  fetchSearchMovies(searchQuery).then(res => {
    setMovieList(res.data.results);
  });

  return (
    <div>
      <Form />
    </div>
  );
}
