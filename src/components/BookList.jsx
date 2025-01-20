import BookCard from './BookCard';
import '../styles/BookList.css';

const BookList = ({ books }) => {
  return (
    <div className="booklist">
      {books.map(book => (
        <BookCard key={book.isbn} book={book} />
      ))}
    </div>
  );
};

export default BookList;
