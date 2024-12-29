import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader'; 
import './App.css';
import ErrorMessage from './components/ErrorMessage'; 

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // состояние загрузки
  const [errorMessage, setErrorMessage] = useState(null); // состояние ошибки

  // Функция для поиска изображений
  const fetchImages = async (query) => {
    const API_URL = 'https://api.unsplash.com/search/photos';
    const ACCESS_KEY = 'dGN3A5mgFyKt9FJLf0LIU7_o2MiwUlKgy0Ap87aNpzY'; 

    setErrorMessage(null); // выключаем ошибку
    setIsLoading(true); // включаем индикатор
    console.log('Загрузка началась...');
    
    try {
      const response = await fetch(
        `${API_URL}?query=${query}&page=1&per_page=12&client_id=${ACCESS_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Помилка: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data.results]); // новые изображения
      toast.success(`Знайдено ${data.results.length} зображення!`);
    } catch (error) {
      toast.error(`Помилка: ${error.message}`);
      setErrorMessage(error.message); // включаем ошибку
    } finally {
      setIsLoading(false); // выключаем индикатор
      console.log('Загрузка завершена...');
    }
  };

  // обработчик события поиска
  const handleSearch = (query) => {
    if (!query.trim()) {
      toast.error('Введіть пошуковий запит!');
      return;
    }
    setImages([]); // очищаем изображения
    fetchImages(query);
  };

  return (
    <div id="app">
      <header className="header">
        <SearchBar onSubmit={handleSearch} />
      </header>

      <main className="main">
        {errorMessage ? (
          <ErrorMessage message={errorMessage} /> 
        ) : (
          <>
            <ImageGallery images={images} />
            {isLoading && <Loader />} {/* Показываем Loader, пока идет загрузка */}
          </>
        )}
      </main>

      <Toaster position="top-right" />
    </div>
  );
}

export default App;



