import React, { Component } from "react";
import { withFirestore } from "react-firestore";

// Status Report: I've got the state logging to the console on click.
// Now I need to find a way to wrap this component in the higher order component, withFirestore, so that I can add new book to the db.
// Andrew has this in App componenet in BYOHS. react-firestore docs have an example that I've included below.

class AddBook extends Component {
  state = {
    title: "",
    author: "",
    bookURL: "",
    imageURL: "",
    synopsis: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.addBook(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add a Book</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="author">Author</label>
            <input type="text" id="author" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="synopsis">Synopsis</label>
            <textarea
              id="synopsis"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="bookURL">Where can you find the book online?</label>
            <input type="url" id="bookURL" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="imageURL">Link to the book image</label>
            <input type="url" id="imageURL" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add Book</button>
          </div>
        </form>
      </div>
    );
  }
}

// Using react-firestore's code:
// class AddBook extends Component {
//     state = {
//       title: null,
//     };

//     componentDidMount() {
//       const { firestore } = this.props;

//       firestore.doc('books/1').onSnapshot(snapshot => {
//         this.setState({ books: snapshot });
//       });
//     }

//     render() {
//       const { book } = this.state;
//       const bookData = book ? book.data() : null;

//       return (
//         <div>
//           <h1>{bookData.title}</h1>
//           <h2>
//             {bookData.author} - {bookData.bookURL}
//           </h2>
//           <p>{bookData.synopsis}</p>
//         </div>
//       )
//     }
//   }

export default withFirestore(AddBook);
