import { useState, useEffect } from 'react';

const useBookSearch = (initialBooks, query) => {
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  useEffect(() => {
    if (query) {
      setFilteredBooks(
        initialBooks.filter(book =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase()) ||
          book.isbn.includes(query)
        )
      );
    } else {
      setFilteredBooks(initialBooks);
    }
  }, [query, initialBooks]);

  return filteredBooks;
};

export default useBookSearch;