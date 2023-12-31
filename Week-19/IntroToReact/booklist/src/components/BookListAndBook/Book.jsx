import React from 'react'

const Book = ({title,author,year}) => {
    return (
        <div><table >
            <tr key={title}>
                <td >{title} </td>
                <td>{author}</td>
                <td>{year}</td>
            </tr>
        </table></div>
    )
}

export default Book