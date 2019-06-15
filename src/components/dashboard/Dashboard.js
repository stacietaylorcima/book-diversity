// Creating as a class-based component because we might use states and lifecycle hooks in the future
import React, { Component } from 'react'

import BookList from "../book/BookList"
import CollectionList from "../collection/CollectionList"
import { connect } from 'react-redux'

class Dashboard extends Component {
    render(){
        // console.log(this.props)
        const { books } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <BookList books={books}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <CollectionList />
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        books: state.book.books
    }
}

export default connect(mapStateToProps)(Dashboard)