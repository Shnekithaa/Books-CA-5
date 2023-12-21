import React, { useState, useEffect } from 'react';
import FetchBooks from './Components/FetchBooks';
import SearchBar from './Components/SearchBar';
import RegisterForm from './Components/RegisterForm';
import './App.css';

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [registeredData, setRegisteredData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          'https://reactnd-books-api.udacity.com/books',
          { headers: { 'Authorization': 'whatever-you-want' } }
        );
        const data = await response.json();
        console.log(data.books)
        setBooks(data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleRegister = (formData) => {
    console.log('Registered Data:', formData);
    setRegisteredData(formData);
    setIsRegistering(false);
  };

  return (
    <div className='home'>
      <h1 className='main-heading'>Kalvium Books</h1>
      {isRegistering ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <div>
          <SearchBar books={books} onSearch={handleSearch} />
          {searchTerm && filteredBooks.length > 0 && (
            <div>
              <h2>Search Results</h2>
              <ul>
                {filteredBooks.map((book) => (
                  <li key={book.id}>
                    <img src={book.imageLinks.thumbnail} />
                    <strong>{book.title}</strong>
                    <p>Free</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!searchTerm && (
            <FetchBooks books={books} onRegisterClick={handleRegisterClick} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
