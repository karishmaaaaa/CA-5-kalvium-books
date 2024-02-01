import React, { useState, useEffect } from 'react';

function Book() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://reactnd-books-api.udacity.com/books', {
          headers: {
            'Authorization': 'whatever-you-want'
          }
        });
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const filtered = books.filter(book => {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredBooks(filtered);
  }, [searchTerm, books]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1 id='head'>Kalvium Books</h1>
      <input
        id='Search'
        type="text"
        placeholder="🔍 Search Book"
        value={searchTerm}
        onChange={handleSearch}
      />
      <hr />
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            <img src={book.imageLinks.thumbnail} alt={book.title} />
            <strong>{book.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Book;
