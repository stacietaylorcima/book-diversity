import React from "react";
import { FirestoreCollection } from "react-firestore";

const BookList = ({ book }) => {
  return (
    <section>
      <FirestoreCollection
        path="books"
        render={({ data }) => {
          return (
            <article>
              <ul className="card z-depth-0 book-overview">
                {data.map(book => (
                  <li key={book.id} className="card-content grey-text text-darken-3">
                    <title className="card-title">{book.title}</title>
                    <p>{book.imageURL}</p>
                    <p>by {book.author}</p>
                    <p> {book.synopsis}</p>
                    <p>{book.bookURL}</p>
                    <p>{book.fiction}</p>
                  </li>
                ))}
                </ul>
            </article>
          );
        }}
      />
    </section>
  );
};

export default BookList;
