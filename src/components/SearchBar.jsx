import { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch, isSearching }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // Ejecuta la función de búsqueda pasándole el término de búsqueda
    }
  };

  return (
    <div className={isSearching ? 'search-bar--compact' : 'search-bar'}>
    <form className={`search-bar__form ${isSearching ? 'search-bar__form--compact' : ''}`} onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchbar__input"
        placeholder="Buscar por título, autor, ISBN..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="searchbar__button">Buscar</button>
    </form>
    </div>
  );
};

export default SearchBar;
