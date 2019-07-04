import React, { Component } from "react";

// imports for Firebase Google authentication
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import fb from "../../config/firebase";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div className="container">

        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-3 z-depth-0">Login</button>
            {user ? (
            <button className="btn teal lighten-1 z-depth-0 signInAndOut" onClick={signOut}>Sign out</button>
          ) : (
            <button className="btn pink lighten-1 z-depth-0 signInAndOut" onClick={signInWithGoogle}>Sign in with Google</button>
          )}
          </div>
        </form>
      </div>
    );
  }
}
// Setup the providers we want to support and access the auth library
const firebaseAppAuth = fb.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

// Wrap the export of the App component using the withFirebaseAuth HOC. 
// It provides us with the user, an error, and some signIn and signOut methods as properties.
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(SignIn);
