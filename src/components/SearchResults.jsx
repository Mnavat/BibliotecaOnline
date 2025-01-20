import { useState } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList'; // Asegúrate de tener este componente
import useBookSearch from '../hooks/useBooksSearch'; // Importamos el custom hook
import { books } from '../mocks'; 
import '../styles/SearchResults.css';

const SearchResults = () => {
  const [query, setQuery] = useState('');
  const booksq=books
  // Usamos el custom hook para filtrar los libros
  const filteredBooks = useBookSearch(booksq, query);
  //Determinar si hay una busqueda activa
  const isSearching = query.trim() !== '';

  // Actualiza el query cuando se realiza la búsqueda desde SearchBar
  const handleSearch = (newQuery) => {
    setQuery(newQuery);// Actualiza el estado query con el nuevo valor
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} isSearching={isSearching}/> {/* Pasa handleSearch al SearchBar */}
      {isSearching ? (
        filteredBooks.length > 0 ? (
          <BookList books={filteredBooks} /> // Mostrar libros filtrados
        ) : (
          <div className="no-books-container">
            <p className="no-books-message">Libro no encontrado</p>
          </div>
        )
      ) : (
        <BookList books={booksq} /> // Mostrar todos los libros si no hay búsqueda
      )}
    </div>
  );
};

export default SearchResults;