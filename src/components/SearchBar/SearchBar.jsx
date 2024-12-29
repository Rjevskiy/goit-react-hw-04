import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Будь ласка, введіть текст для пошуку зображень!');
    } else {
      onSubmit(query);
      setQuery('');
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={handleChange}
          placeholder="Введіть текст для пошуку зображень"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

