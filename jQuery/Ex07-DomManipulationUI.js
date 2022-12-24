function saveData(){
    localStorage.setItem("books", JSON.stringify(bookRepo.books))
}
function loadData(){
    if(localStorage.getItem("books") == undefined){
        localStorage.setItem("books", JSON.stringify([]));
    }else
        bookRepo.books = JSON.parse(localStorage.getItem("books"));
}
function hideDivs(){
    $("div.col-md-8").hide(2000)
    $("div.col-md-4 > div").hide(2000)
} 
function onAddLink(){
    hideDivs()
    $("div.col-md-4 > div:eq(1)").show(2000);
}
function displayRecords(){
    //call the load data to get existing records.
    loadData(); 
    //call the getAllBooks function.
    const books = bookRepo.getAllBooks();
    $("table").find("tr:gt(0)").remove(); //clear the existing table with only heading.
    //iterate thru the collection and fill the table. 
    $.each(books, (index, book)=>{
        const row = createRow(book);
        $("table").append(row)
    })
}

function createRow(book){
    const row = `<tr><td>${book.id}</td><td>${book.title}</td><td>${book.author}</td><td>Rs. ${book.price}</td><td><a href="#" class="btn btn-secondary edit" info="${book.id}">Edit</td></tr>`
    return row;    
}
function onShowLink(){
    hideDivs();
    displayRecords();
    $("div.col-md-8").show(2000);
    $(".edit").click(function(){
        const id = $(this).attr("info");
        const selectedBook = bookRepo.getBook(id);
        $("#txtId").val(selectedBook.id)
        $("#txtTitle").val(selectedBook.title)
        $("#txtAuthor").val(selectedBook.author)
        $("#txtPrice").val(selectedBook.price)
        hideDivs();
        $("div.col-md-4 > div:first").show(2000);
    })
}
function onAddNew(){
    const id = $("#txtNewId").val();
    const title = $("#txtNewTitle").val();
    const author = $("#txtNewAuthor").val();
    const price = $("#txtNewPrice").val();
    const book = new Book(id, title, author, price);
    bookRepo.addNewBook(book);
    alert("Book added to the storage");
    saveData();
}
function onDeleteLink(){
    const id = parseInt(prompt("Enter the Id of the Book to remove"));
    loadData();//To get fresh data from the local storage.
    bookRepo.deleteBook(id);
    saveData();//save the changes made to the local storage.
    alert("Book Deleted from the Repo");
}

function onUpdate(){
    const id = $("#txtId").val();
    const title = $("#txtTitle").val();
    const author = $("#txtAuthor").val();
    const price = $("#txtPrice").val();
    const book = new Book(id, title, author, price);
    bookRepo.updateBook(book);
    alert("Book added to the storage");
    saveData();
}