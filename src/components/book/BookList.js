import React from 'react'
import BookOverview from './BookOverview'

const BookList = ({books}) => {
    return (
        <div className="book-list section">
           { books && books.map(book => {
               return(
                   <BookOverview book={book} key={book.id} />
               )
           })}
        </div>
    )
}

export default BookList