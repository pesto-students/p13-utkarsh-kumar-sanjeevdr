import React from 'react'
import styles from './booklist.module.css'; 

const BookList = () => {

    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 }
    ];   

    return (
        <>            
            <ul>
                {books && books.map(book =>
                    <li>                        
                        <table >
                            <tr key={book.title}>
                                <td >{book.title} </td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                            </tr>
                        </table>
                    </li>
                )}
            </ul>
        </>
    )
}

export default BookList