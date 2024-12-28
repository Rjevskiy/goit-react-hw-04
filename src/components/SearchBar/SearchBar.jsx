import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  // обробка  форми
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === '') {
      // якщо поле  порожнє
      toast.error('Будь ласка, введіть текст для пошуку зображень!');
    } else {
      // якщо є запит
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
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

