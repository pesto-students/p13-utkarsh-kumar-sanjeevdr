import React, { useState } from 'react';
import './booklist.module.css';
import BookForm from './BookForm';
import BookDetail from './BookDetail';
import WithLogging from './WithLogging';

const BookList = () => {
    const booksInit = [
        { title: 'Book 1', author: 'Author 1', year: 2020, desc: 'Desc 1', genre: 'Genre 1' },
        { title: 'Book 2', author: 'Author 2', year: 2018, desc: 'Desc 2', genre: 'Genre 2' },
        { title: 'Book 3', author: 'Author 3', year: 2022, desc: 'Desc 3', genre: 'Genre 3' }
    ];

    const [books, setBooks] = useState(booksInit);
    // const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        year: "",
        desc: "",
        genre: "",
    });

    const deleteBook = (title) => {
        const updatedBooks = books.filter((item) => item.title !== title);
        setBooks(updatedBooks);
    };

    const addBook = () => {
        if (newBook.title.trim() !== '') {
            setBooks((prevBooks) => [...prevBooks, newBook]);
            setNewBook({
                title: "",
                author: "",
                year: "",
                desc: "",
                genre: "",
            });
        }
    };

    return (
        <>
            <div>BookList</div>
            <ul>
                {books.length ? books.map(book =>
                    <li key={book.title}>
                        <BookDetail book={book} onDelete={() => deleteBook(book.title)} />
                    </li>
                ) : <h2>Currently there are no Books</h2>}
            </ul>
            <BookForm newBook={newBook} setNewBook={setNewBook} addBook={addBook} />
        </>
    )
}

export default WithLogging(BookList);

