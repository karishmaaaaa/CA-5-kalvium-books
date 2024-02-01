import React, { useState } from 'react';
import Book from './components/Book';
import RegisterForm from './components/RegisterForm';
import './App.css';

function App() {
  const [page, setPage] = useState('booklist');

  const handleRegisterClick = () => {
    setPage('register')
  };

  return (
    <div>
      {page === 'booklist' ? (
        <div>
          <Book />
          <button className='create' onClick={handleRegisterClick}>Create account</button>
        </div>
      ) : (
        <RegisterForm />
      )}
    </div>
  );
}

export default App;
