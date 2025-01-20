import {useState} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetails.css';

const BookDetail = ({ books, rentedBooks, onRentBook }) => {
  const { isbn } = useParams();
  const book = books.find(b => b.isbn === isbn);
  const rentedBook= rentedBooks.find(b => b.libro === book);

  // Estado para el popup
  const [showPopup, setShowPopup] = useState(false);
  const [rentalDays, setRentalDays] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  
  if (!book) {
    return <p className='notfound'>Libro no encontrado</p>; // Si el libro no se encuentra, muestra un mensaje
  }

    // Manejar el cambio de días seleccionados
    const handleRentalDaysChange = (days) => {
      setRentalDays(days);
  
      // Calcular la fecha de devolución
      const currentDate = new Date();
      const returnDate = new Date(currentDate.setDate(currentDate.getDate() + days));
      setReturnDate(returnDate.toISOString().split('T')[0]);
    };
  
    // Confirmar el alquiler
    const handleConfirm = () => {
      onRentBook({
        libro: book,
        rentalDays,
        returnDate,
      });
      setShowPopup(false); // Cierra el popup
    };  

  return (
    <div className="bookdetail">
      <div className="bookdetail__container">
        <div className="bookdetail__info">
          <h2 className="bookdetail__title">{book.title}</h2>
          <p className="bookdetail__author">Autor: {book.author}</p>
          <p className="bookdetail__pages">Páginas: {book.pages}</p>
          <p className="bookdetail__description">{book.synopsis}</p>
          { !rentedBook ? (
            <button className="bookcard__button" onClick={() => setShowPopup(true)}>Solicitar préstamo</button>
          ):(
            <div></div>
          )}
        </div>
        <div className="bookdetail__image">
          <img src={book.coverImage} alt={book.title} className="bookdetail__image-img" />
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Préstamo de libro</h2>
            <p><strong>Nombre:</strong> {book.title}</p>
            <p><strong>Autor:</strong> {book.author}</p>
            <p>Alquilar por:</p>
            <div className="rental-options">
              {[10, 15, 20].map((days) => (
                <label key={days}>
                  <input
                    type="checkbox"
                    checked={rentalDays === days}
                    onChange={() => handleRentalDaysChange(days)}
                  />
                  {days} días
                </label>
              ))}
            </div>
            {returnDate && <p><strong>Fecha de devolución:</strong> {returnDate}</p>}
            <div className="popup-buttons">
              <button onClick={handleConfirm} disabled={!rentalDays}>Confirmar</button>
              <button onClick={() => setShowPopup(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
