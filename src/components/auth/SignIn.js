import React, { Component } from "react";

// added during firebase auth build
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from "./firebaseConfig"; // This is thr tutorial importing their config file, mine is at firebase.js but IDK if I need this rn

// Status Report Firebase Auth: following this tutorial: https://medium.com/firebase-developers/how-to-setup-firebase-authentication-with-react-in-5-minutes-maybe-10-bb8bb53e8834
//  on this github: https://github.com/armand1m/react-firebase-authentication-medium/blob/master/src/firebaseConfig.js
// to auth with Google. working on importing firebase.js properly

// Initialize the Firebase app using the configuration
// const firebaseApp = firebase.initializeApp(firebaseConfig); // Already initialized at the higest level index.js, do I need to again? 

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
          {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}

          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          )}
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
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
// Setup the providers we want to support and access the auth library
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

// Wrap the export of the App component using the withFirebaseAuth HOC. It provides us with the user , an error , and some signIn and signOut methods as properties.
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(SignIn);
