import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({ setSearchParams }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();
    if (searchQuery.toLowerCase().trim() === '') {
      return toast.info('Please enter movie name ');
    }
    setSearchParams({ query: form.elements.query.value });
    setSearchQuery('');
  };

  const input = {
    paddingLeft: 20,
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" style={input}>
        <input
          type="text"
          name="query"
          onChange={handleChange}
          value={searchQuery}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
