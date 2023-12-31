import React, { Component } from 'react'
import './booklist.module.css';

export class BookListClass extends Component {

    render() {

        const books = [
            { title: 'Book 1', author: 'Author 1', year: 2020 },
            { title: 'Book 2', author: 'Author 2', year: 2018 },
            { title: 'Book 3', author: 'Author 3', year: 2022 }
        ];

        return (
            <>
                <div>BookListClass</div>
                <ul>
                    {books && books.map(book =>
                        <li key={book.title}>
                            <table >
                                <tbody>
                                    <tr >
                                        <td >{book.title} </td>
                                        <td>{book.author}</td>
                                        <td>{book.year}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    )}
                </ul>
            </>
        )
    }
}

export default BookListClass