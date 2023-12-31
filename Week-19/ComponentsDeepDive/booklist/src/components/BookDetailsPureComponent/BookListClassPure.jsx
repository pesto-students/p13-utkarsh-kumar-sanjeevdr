import React, { Component } from 'react'
import './booklist.module.css'; 
import BookDetailPure from './BookDetailPure';

export class BookListClassPure extends Component {
    
  render() {   

    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 }
    ];   

    return (
        <>  
            <div>BookListClass With Pure Component BookDetails</div>          
            <ul>
                {books && books.map(book =>
                    <li key={book.title}>                        
                        <BookDetailPure title={book.title} author={book.author} year={book.year}/>
                    </li>
                )}
            </ul>
        </>
    )
  }
}

export default BookListClassPure