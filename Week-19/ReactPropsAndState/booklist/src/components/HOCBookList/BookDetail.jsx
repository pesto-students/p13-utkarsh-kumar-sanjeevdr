import React,{ memo,useState }  from 'react'

const BookDetail = ({book,onDelete}) => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <table >
                <tbody>
                    <tr>
                        <td >{book.title} </td>
                        <td>{book.author}</td>
                        <td>{book.year}</td>
                        <td><button onClick={onDelete}>Delete</button></td>
                        <td><button onClick={() => setShowDetails(show => !show)}>Show More</button></td>
                        {showDetails && <><td>{book.desc}</td><td>{book.genre}</td></>}                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default memo(BookDetail);


