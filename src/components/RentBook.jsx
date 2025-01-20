import React, { useState } from 'react';
import '../styles/BookCard.css';
import '../styles/BookList.css';
import '../styles/RentBook.css';


const RentBook = ({ rentedBooks, updateRentedBook }) => {

  const [selectedBook, setSelectedBook] = useState(null);
  const [newReturnDate, setNewReturnDate] = useState('');

  const handleAddDays = (book, index) => {
    // Calcula una nueva fecha sumando 5 días
    const currentDate = new Date(book.returnDate);
    currentDate.setDate(currentDate.getDate() + 5);
    const updatedDate = currentDate.toISOString().split('T')[0];

    setSelectedBook(index); // Guarda el índice del libro seleccionado
    setNewReturnDate(updatedDate); // Actualiza la nueva fecha de devolución
  };

  const confirmNewDate = () => {
    if (selectedBook !== null) {
      updateRentedBook(selectedBook, newReturnDate); // Actualiza el estado en App.jsx
      setSelectedBook(null); // Resetea el estado del popup
    }
  };
  
  return (
    <div>
      <center><h2>Libros Alquilados</h2></center>
      {rentedBooks.length > 0 ? (
       <div className="booklist"> 
        {rentedBooks.map((rentedbook, index) => (
          <div key={index}>
            <div className="bookcard">
              <img src={rentedbook.libro.coverImage} alt={rentedbook.libro.title} className="bookcard__image" />
              <h3 className="bookcard__title">{rentedbook.libro.title}</h3>
              <p className="bookcard__author">{rentedbook.libro.author}</p>
              <p><strong>Días de alquiler:</strong> {rentedbook.rentalDays}</p>
              <p><strong>Fecha de devolución:</strong> {rentedbook.returnDate}</p>
              <button
                  className="add-days-button"
                  onClick={() => handleAddDays(rentedbook, index)}
                >
                  Agregar 5 días al préstamo
                </button>
            </div>
          </div>
        ))}
        </div>
      ) : (
        <div className="no-books-container">
          <p className="no-books-message">No hay libros alquilados.</p>
        </div>
      )}
      {/* Popup */}
      {selectedBook !== null && (
        <div className="popup">
          <div className="popup__content">
            <p>La nueva fecha de devolución será: <strong>{newReturnDate}</strong></p>
            <button className="confirm-button" onClick={confirmNewDate}>
              Confirmar
            </button>
            <button className="cancel-button" onClick={() => setSelectedBook(null)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  )
};
export default RentBook;
  