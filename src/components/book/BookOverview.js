import React from 'react'

const BookOverview = ({book}) => {
    return(
        <div className="card z-depth-0 book-overview">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{book.title}</span>
                <p>by Author Name</p>
                <img src="https://d.gr-assets.com/books/1403534691l/20685495.jpg" alt="book cover"></img>
            </div>
        </div>
    )
}

export default BookOverview 