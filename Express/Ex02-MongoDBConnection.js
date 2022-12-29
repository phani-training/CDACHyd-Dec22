//How to connect to MongoDB from Nodejs:
//Include the package called mongodb. 
//Create the instance of the MongoClient, a Component that does the DB connections and processing of the Data. 
//Get the URL of the database.
//npm install mongodb
const mongo = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";//Database URL for connecting to the database
let database; //Create an object for the Db connection. 
//connect is the API to connect to the database which returns a Promise object. 
//The Promise's then function is used to handle regular Flow. It takes an arg of the db object that contains the instance of the mongodb connection.  
mongo.connect(url).then(db =>{
	database = db.db("SampleDatabase");
    //get the Employee records using collection API that takes the argument of the Collection that U want retrieve. 
	database.collection("employees").find().toArray().then(result =>{
		result.forEach((e)=>{
			console.log(e);
		})
	});	
}).catch((err)=>console.log(err.message));
