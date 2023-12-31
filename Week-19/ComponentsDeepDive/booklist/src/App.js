import React from 'react';
import './App.css';
import BookListClass from './components/BookListClass/BookListClass';
import BookListClassAndBookDetails from './components/BookListClassAndBookDetails/BookListClassAndBookDetails';
import BookListClassPure from './components/BookDetailsPureComponent/BookListClassPure';
import BookListWithLogging from './components/HOCBookList/BookListWithLogging';

function App() {
  return (
    <>      
      <BookListClass/>  
      <br/>
      <BookListClassAndBookDetails/>
      <br/>
      <BookListClassPure/>  
      <br/>  
      <BookListWithLogging/>
    </>
  );
}

export default App;
