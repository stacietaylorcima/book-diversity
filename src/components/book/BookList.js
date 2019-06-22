import React from "react";
import { FirestoreCollection } from "react-firestore";

//Status Report: I've got this componenet pulling data from Firestore using FirestoreCollection from react-firestore.
// I'm not totally sure that I'm apssing props and such properly. It seems like there should be something from App then Dashboard then
// hitting this componenet? React newb here... Going to do some more learning BRB.

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
                  <li
                    key={book.id}
                    className="card-content grey-text text-darken-3"
                  >
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
