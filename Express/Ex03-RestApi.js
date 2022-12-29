//use express to create REST API and connect to Mongodb as database. 
//MERN Stack: MongoDB(Database), Express(Service), React(FrontEnd App), Nodejs(Platform)
//MEAN Stack: MongoDB(Database), Express(Service), Angular(FrontEnd App), Nodejs(Platform)
//API means functions that other programmers can use in their Application. APIs are designed to be platform independent and technology independent. 
//APIs that are accessed using HTTP and its verbs are called as REST API Services.
//This is the most popular Service oriented Architecture available in the industry.
//Java Programmers develop APIs using SpringBoot and other Frameworks. 
//.NET Programmres use Web API to develop Rest services. 
//Python uses flask to develop REST API. 
//PHP can also expose the functions thru REST. 
//REST APIs transfer data using stds like JSON and XML. These are stds for data transfer. REST APIs only share data, not the Presentation. 
//For MongoDb, U can connect to the database either by using MongoClient which is the native API developed for MongoDB by nodejs. U can also connect to the database using a ORM Framwork called Mongoose.
//Express is used to expose the REST API. 

const app = require("express")();
const mongo = require("mongodb").MongoClient;
const parser = require("body-parser");

app.use(parser.urlencoded({"extended" : true}));//We want to parse as JSON data.
app.use(parser.json());

let db;
function getConnection(){
    const url = "mongodb://127.0.0.1:27017/";
    mongo.connect(url).then(mongo=>{
        db = mongo.db("SampleDatabase");
    }).catch(err=>{
        console.log(err.message);
    })
}
getConnection();//Call this function once and only once 

//HTTPGET
app.get("/Employees", (req, res)=>{
    db.collection("employees").find().toArray().then(data=>{
        res.send(data);//data is sent as response to the Caller of this API
    })
})
//nodemon
app.get("/Client", (req, res)=>{
    res.sendFile(__dirname + "/RestClient.html")   
})

app.post("/Employees", (req, res)=>{
    let rec = req.body;
    console.log(res);
    db.collection("employees").insert(rec);
    res.send("Employee inserted to the database")
})

app.listen(1234, ()=>{
    console.log("server is available at 1234")
})
