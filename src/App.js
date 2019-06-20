import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FirestoreCollection } from "react-firestore";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import BookDetails from "./components/book/BookDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AddBook from "./components/book/AddBook";

class App extends Component {
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
