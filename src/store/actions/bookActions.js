export const addBook = (book) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('books').add({
            ...book, 
        }).then(() => {
            dispatch({ type: 'ADD_BOOK', book });
        }).catch((err) => {
            dispatch({ type: 'ADD_BOOK_ERROR', err });
        })
    }
};