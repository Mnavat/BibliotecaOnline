import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import RentBook from './components/RentBook';
import SearchResults from './components/SearchResults';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { books } from './mocks';  // Mocks de libros
import './styles/colors.css';

function App() {
  const [rentedBooks, setRentedBooks] = useState([]);

  const handleRentBook = (rentedBook) => {
    setRentedBooks([...rentedBooks, rentedBook]);
  }

  const updateRentedBook = (index, newReturnDate) => {
    const updatedBooks = [...rentedBooks];
    updatedBooks[index].returnDate = newReturnDate; // Actualiza la fecha de devolución
    setRentedBooks(updatedBooks); // Actualiza el estado
  };
  
  return (
  <div>
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Ruta de inicio */}
          <Route path="/" element={<Home books={books.slice(0,4)}/>} />
                    
          {/* Ruta de libros */}
          <Route path="/libros" element={<div style={{marginTop: '20px'}}><center><h2>Nuestra selección de libros</h2></center><BookList books={books} /></div>} />
          
          {/* Ruta de búsqueda */}
          <Route path="/buscar" element={<SearchResults books={books} />} />
          
          {/* Ruta de detalles de un libro */}
          <Route path="/libro/:isbn" element={<BookDetail books={books} rentedBooks={rentedBooks} onRentBook={handleRentBook}/>} />
          
          {/* Ruta para alquiler de libro */}
          <Route path="/alquiler" element={<RentBook rentedBooks={rentedBooks} updateRentedBook={updateRentedBook} />} />

          {/*Ruta para error*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
