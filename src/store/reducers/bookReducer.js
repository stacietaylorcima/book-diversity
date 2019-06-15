const initState = {
    books: [
        {id: "1", title: "Title of the First Book", author: "Author One", synopsis: "blah, blah, blah, dummy synopsis 1", bookURL: "dummy book URL", imageURL: "dummy image URL"},
        {id: "2", title: "Title of the Second Book", author: "Author Two", synopsis: "blah, blah, blah, dummy synopsis 2", bookURL: "dummy book URL", imageURL: "dummy image URL"},
        {id: "3", title: "Title of the Third Book", author: "Author Three", synopsis: "blah, blah, blah, dummy synopsis 3", bookURL: "dummy book URL", imageURL: "dummy image URL"}
    ]
}

const bookReducers = (state = initState, action) => {
    switch (action.type){
        case 'ADD_BOOK':
            console.log("added book", action.project); 
            return state;
        case 'ADD_BOOK_ERROR': 
            console.log('add book error', action.err);
            return state;
        default:
            console.log("broken");
            return state;
    }
} ;

export default bookReducers