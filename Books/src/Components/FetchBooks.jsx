import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FetchBook.css';

const FetchBooks = ({ books, onRegisterClick }) => {
  return (
    <div className='fetch-container'>
        <button onClick={onRegisterClick}>Register</button>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <img src={book.imageLinks.thumbnail} alt="" />
            <strong>{book.title}</strong>
            <p>Free</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default FetchBooks;

