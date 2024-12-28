import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast'; // імпортуємо Toaster
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  const [images, setImages] = useState([]);

  // пошук зображень
  const fetchImages = async (query) => {
    const API_URL = 'https://api.unsplash.com/search/photos';
    const ACCESS_KEY = 'dGN3A5mgFyKt9FJLf0LIU7_o2MiwUlKgy0Ap87aNpzY'; // Замініть на ваш ключ

    try {
      const response = await fetch(`${API_URL}?query=${query}&page=1&per_page=12&client_id=${ACCESS_KEY}`);
      if (!response.ok) {
        throw new Error(`Сталася помилка: ${response.status} - ${response.statusText}`);}
      
      
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Помилка:', error.message);
    }
  };

  // обробник події 
  const handleSearch = (query) => {
    fetchImages(query);
  };

  return (
    <div id="app">
      <header>
        <h1>Пошук зображень</h1>
        <SearchBar onSubmit={handleSearch} />
      </header>
      <main>
        <ImageGallery images={images} />
      </main>

      {/*  тост */}
      <Toaster />
    </div>
  );
}

export default App;





