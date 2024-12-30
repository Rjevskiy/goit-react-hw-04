import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/Loader/ErrorMessage';
import LoadMoreBtn from './components/Loader/LoadMoreBtn'; 

import './App.css';

function App() {
  const [images, setImages] = useState([]); // Состояние для изображений
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки
  const [errorMessage, setErrorMessage] = useState(null); // Состояние ошибки
  const [modalImage, setModalImage] = useState(null); // Состояние для модального окна
  const [page, setPage] = useState(1); // Состояние для текущей страницы
  const [query, setQuery] = useState(''); // Состояние для текущего поискового запроса

  // Функция для поиска изображений
  const fetchImages = async (query, page = 1) => {
    const API_URL = 'https://api.unsplash.com/search/photos';
    const ACCESS_KEY = 'dGN3A5mgFyKt9FJLf0LIU7_o2MiwUlKgy0Ap87aNpzY';

    setErrorMessage(null); // сбросить ошибку
    setIsLoading(true); // установить загрузку
    console.log('Загрузка началась...');

    try {
      const response = await fetch(
        `${API_URL}?query=${query}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data.results]); // Добавляем новые изображения к предыдущим
      toast.success(`Знайдено ${data.results.length} зображень!`);
    } catch (error) {
      toast.error(`Ошибка: ${error.message}`);
      setErrorMessage(error.message); // установить ошибку
    } finally {
      setIsLoading(false); // сбросить индикатор загрузки
      console.log('Загрузка завершена...');
    }
  };

  // Обработчик поиска
  const handleSearch = (newQuery) => {
    if (!newQuery.trim()) {
      toast.error('Введіть пошуковий запит!');
      return;
    }
    setQuery(newQuery); // Сохраняем новый поисковый запрос
    setImages([]); // очищаем старые изображения
    setPage(1); // сбрасываем номер страницы
    fetchImages(newQuery, 1); // Загружаем первую порцию изображений
  };

  // Обработчик загрузки следующей порции изображений
  const loadMore = () => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      fetchImages(query, nextPage); // Используем сохраненный запрос
      return nextPage;
    });
  };

  // Открытие модального окна
  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setModalImage(null);
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
            <ImageGallery images={images} onImageClick={openModal} />
            {isLoading && <Loader />} {/* Показываем Loader, пока идет загрузка */}
            {images.length > 0 && !isLoading && (
              <LoadMoreBtn onClick={loadMore} />
            )}
          </>
        )}
      </main>

      <ImageModal isOpen={!!modalImage} image={modalImage} onClose={closeModal} />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
