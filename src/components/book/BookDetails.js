import React from 'react'
import { FirestoreCollection } from 'react-firestore';


const BookDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details"> 
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Book Title - {id}</span>
                    <p>The extraordinary memoir of an orphan who danced her way from war-torn Sierra Leone to ballet stardom, most recently appearing in Beyonce's Lemonade and as a principal in a major American dance company.</p>
                    <img src="https://d.gr-assets.com/books/1403534691l/20685495.jpg" alt="book cover"></img>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>by Michaela DePrince & Elaine DePrince</div>
                    <div>Find the book: https://www.penguinrandomhouse.com/books/235474/taking-flight-from-war-orphan-to-star-ballerina-by-michaela-deprince-and-elaine-deprince/9780385755146/</div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails