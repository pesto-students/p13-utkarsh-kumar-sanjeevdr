import React from 'react'
import { PureComponent } from 'react'

export class BookDetailPure extends PureComponent {
    render() {
        return (
            <div>
                <table >
                    <tbody>
                        <tr>
                            <td >{this.props.title} </td>
                            <td>{this.props.author}</td>
                            <td>{this.props.year}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BookDetailPure;

