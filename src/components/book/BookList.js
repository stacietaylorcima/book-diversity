import React from "react";
import { FirestoreCollection } from "react-firestore";

const BookOverview = ({ book }) => {
  return (
    <div>
      <FirestoreCollection
        path="books"
        render={({ data }) => {
          return (
            <div>
              <ul>
                {data.map(book => (
                  <li key={book.id}>{book.title}</li>
                ))}
              </ul>
            </div>
          );
        }}
      />
    </div>
    // <div className="card z-depth-0 book-overview">
    //     <div className="card-content grey-text text-darken-3">
    //         <span className="card-title">{book.title}}</span>
    //         <p>by {book.author}}</p>
    //         <img src="https://d.gr-assets.com/books/1403534691l/20685495.jpg" alt="book cover"></img>
    //     </div>
    // </div>
  );
};

export default BookOverview;
