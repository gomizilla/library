
let myLibrary = [];

function book(title, author, numOfPages, haveRead) {
    this.title = title;
    this.author - author;
    this.numOfPages = numOfPages;
    this.haveRead = haveRead;
    this.info = function() {
        return title + ' ' + 'by ' + author + ', ' + numOfPages
        + ' pages, ' + haveRead;
    }
}

let theHobbit = new book('The Hobbit', 'J.R.R. Tolkein', 295, 'read');

function addBookToLibrary() {
    
}