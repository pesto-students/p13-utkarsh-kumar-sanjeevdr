import React from 'react';

const BookForm = ({ newBook, setNewBook, addBook }) => {    

  return (
    <div>
      <input
        type="text"
        name="title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        placeholder="Enter a title"
      />
      <br/>
      <input
        type="text"
        name="author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        placeholder="Enter a author"
      />
      <br/>
      <input
        type="text"
        name="year"
        value={newBook.year}
        onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
        placeholder="Enter a year"
      />
      <br/>
      <input
        type="text"
        name="desc"
        value={newBook.desc}
        onChange={(e) => setNewBook({ ...newBook, desc: e.target.value })}
        placeholder="Enter a description"
      />
      <br/>
      <input
        type="text"
        name="genre"
        value={newBook.genre}
        onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        placeholder="Enter a genre"
      />
      <br/>
      <button onClick={addBook}>Add Book</button>
    </div>
  );
};

export default BookForm;