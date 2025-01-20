import { Link } from 'react-router-dom';
import '../styles/BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="bookcard">
        <img src={book.coverImage} alt={book.title} className="bookcard__image" />
        <h3 className="bookcard__title">{book.title}</h3>
        <p className="bookcard__author">{book.author}</p>
        <p className="bookcard__description">{book.pages} pags.</p>
        <div><Link to={`/libro/${book.isbn}`} className="bookcard__button">Ver detalles</Link></div>
    </div>
  );
};

export default BookCard;