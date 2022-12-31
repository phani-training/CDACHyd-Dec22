//Mongoose is an ORM setup for Mongodb. Very similar to the way Hibernate, JPA and Entity Framework of .NET works. U create Class schemas on the collections that U want to store in UR database. 
//With Mongoose, U can develop Class schemas based on which the database creates the collections and consumes it. 
//Mongoose is a framwork for connecting MongoDB in more flexible and easy manner. 
//U need EXPRESS to create the server, U need a schema to define the collection used in the Mongodb and finally APIs to perform the CRUD operations. 
//Steps:
//Create the schema for for the collection. The Schema fine defines the columns of UR data including the type, name and other constraints. 
//Create the Server app that connects to the database using mongoose API and performs UR CRUD operations. 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Book = require("./BookSchema");
const bodyparser = require('body-parser');
const app = express();
const port = 1234;
const connectionUrl = 'mongodb://127.0.0.1:27017/SampleDatabase'
mongoose.connect(connectionUrl);
//CORS stands for Cross Origin Resource Sharing which is disabled by all server environments. Technically it is not possible to make Cross machine requests directly. 
//So our REST API will enable it by using a packge of nodejs called cors. Using Express, we use the middleware to enable Cors
app.use(bodyparser.urlencoded({ extended : true}))
app.use(bodyparser.json())
app.use(cors());

app.get("/Books", (req, res)=>{
    Book.find({}).exec((err, books)=>{
        if (err)
            res.send("Error Occured as " + err)
        else {
            res.json(books);//JSON is converting the object to JSON content
        }
    })
})

app.get("/Books/:id", (req, res)=>{
    Book.findOne({BookId : req.params.id}).exec((err, book)=>{
        if(err)
            console.log("Error occured");
        res.json(book)    
    }) 
})

app.post("/Books", (req, res)=>{
    const myBook = new Book();
    myBook.BookId = req.body.BookId;
    myBook.Title = req.body.Title;
    myBook.Price = req.body.Price;
    myBook.Author = req.body.Author;

    myBook.save((err, book)=>{
        if(err){
            console.log(err)
            res.send("Error occured")
        }else{
            res.send("Book inserted Successfully")
        }
    })
})

app.put("/Books", (req, res)=>{
    const myBook = new Book();
    myBook.BookId = req.body.BookId;
    myBook.Title = req.body.Title;
    myBook.Price = req.body.Price;
    myBook.Author = req.body.Author;

    Book.updateOne({BookId : myBook.BookId}, {
        Title : myBook.Title, Author : myBook.Author, Price : myBook.Price
    }, (err, book)=>{
        if(err)
           console.log(err);
        else{
            res.send("Book updated")
        }
    })
})

app.delete("/Books/:id", (req, res)=>{
    const id = req.params.id;
    Book.deleteOne({BookId : id}).then(function(){
        res.send("Record deleted successfully")
    }).catch(function(err){
        console.log(err)
        res.send("Error occured while Deleting")
    })
})
app.listen(port, ()=>{
    console.log("server is available at port : 1234")
})


