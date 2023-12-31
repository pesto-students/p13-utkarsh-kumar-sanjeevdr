import React from 'react'

const BookDetail = ({ title, author, year }) => {
    return (
        <div>
            <table >
                <tbody>
                    <tr >
                        <td >{title} </td>
                        <td>{author}</td>
                        <td>{year}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BookDetail