//Entity Class.
class Book{
    constructor(id, title, author, price, image = ""){
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.image = image;
    }
}

class BookRepository{
 constructor(){
    this.books = [];//public accessible member
 }
 
 //Create(C)
 addNewBook = (book) => this.books.push(book);
 //Read(R)
 getAllBooks =() =>this.books;
 getBook = (id) => this.books.find((bk) => bk.id == id);
 //Update(U)
 updateBook = (modifiedBook) => {
    const index = this.books.findIndex((bk) =>bk.id == modifiedBook.id);
    this.books.splice(index, 1, modifiedBook);//Replace the existing book with modified  book.
 }
 //Delete(D)
 deleteBook = (id) => {
    const index = this.books.findIndex((bk) =>bk.id == id);
    this.books.splice(index, 1);
 }
}