import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  // Обробка події сабміту форми
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === '') {
      // Якщо поле пошуку порожнє, показуємо сповіщення
      toast.error('Будь ласка, введіть текст для пошуку зображень!');
    } else {
      // Якщо є запит, передаємо його батьківському компоненту
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

