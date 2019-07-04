import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FirestoreCollection } from "react-firestore";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import BookDetails from "./components/book/BookDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AddBook from "./components/book/AddBook";

// Status Report Books to Firebase: I think that I need to be connecting to FirestoreCollection and/or Firestore Document at this level
// and then passing that data down the line all the way to my BookDetails component. Data is currently being pulled into
// Booklist, which is like App>Dashboard>Booklist. BookDetails and AddBook don't seem to need to be nested into any other
// componenet so I'm not sure how to best get data over to those components.

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/book/:id" component={BookDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/addbook" component={AddBook} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
