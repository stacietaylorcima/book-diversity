import React, { Component } from "react";
import { withFirestore } from "react-firestore";

// Status Report: I've got data sending to firestore from the addBook method!

class AddBook extends Component {
  state = {
    title: "",
    author: "",
    bookURL: "",
    imageURL: "",
    synopsis: ""
  };

  addBook = s => {
    let { firestore } = this.props;

    firestore
      .collection('books')
      .add({
        title: s.title,
        author: s.author,
        bookURL: s.bookURL,
        imageURL: s.imageURL,
        synopsis: s.synopsis
    })
    console.log("addBook function is running");
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addBook(this.state);
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

export default withFirestore(AddBook);
