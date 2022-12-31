# Express Framework
- Express a 3rd party Node Framework for building rich internet applications in an express manner. 
- The Framework provides APIs to create Web Apps in simple and yet effective manner. 
- Basically used for creating REST API. 
- REST API allows to create Functions that can be accessible in a platform independent manner using HTTP. 
- HTTP verbs like GET(Read), PUT(Update), POST(Create/Add), DELETE(Delete) will determine the flow of data from the server to the Client and vice versa.
- Express is faster and is used by large scale Applications. 
- U need to install the Express package using a tool called npm.
- npm stands for NODE PACKAGE MANAGER. 

# What is NPM?
- It is very similar to Github that allows to publish nodejs packages for the developer community.
- It is open source and once the developer creates a package or developes something that he wishes to publish for the developer Community, then he will push the package to this large repository of Node packages that are available for distributed Environment.

# How to install EXPRESS
1. Create a new Folder for UR Project
2. Optionally create a package.json file that works like Config settings to UR project. 
3. Install the express in ur folder using the command: npm install express
4. The Express will be available under a folder called as node_modules.
5. Along with itself, it will also install all the dependencies of express which are available as additional packages.  

# Example of Express Application.
1. When the HTML form POST the data to the Application, it will post it as BODY. The term "body of the form" implies the inputs that User gives for the form submit. 
2. In express, we need a body-parser to parse(process) the body. If no parser is provided, then the body will not be created in Express. In this case, the body if refered, it will be undefined. 
# Connect to MongoDB
- Include the package called mongodb. ==> npm install mongodb
- Connect to the Url that is specified in the Mongo Command. 
- connect is the API to connect to the database which returns a Promise object. 
- The Promise's then function is used to handle regular Flow. It takes an arg of the db object that contains the instance of the mongodb connection.  

```
const mongo = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";//Database URL for connecting to the database
let database; //Create an object for the Db connection. 
mongo.connect(url).then(db =>{
	database = db.db("SampleDatabase");
    //get the Employee records using collection API that takes the argument of the Collection that U want retrieve. 
	database.collection("employees").find().toArray().then(result =>{
		result.forEach((e)=>{
			console.log(e);
		})
	});	
}).catch((err)=>console.log(err.message));
```
## Mongoose
- Mongoose is an ORM setup for Mongodb. Very similar to the way Hibernate, JPA and Entity Framework of .NET works. U create Class schemas on the collections that U 
- With Mongoose, U can develop Class schemas based on which the database creates the collections and consumes it. 
- Mongoose is a framwork for connecting MongoDB in more flexible and easy manner. 
- U need EXPRESS to create the server, U need a schema to define the collection used in the Mongodb and finally APIs to perform the CRUD operations. 
- Steps:
- Create the schema for for the collection. The Schema fine defines the columns of UR data including the type, name and other constraints. 
- Create the Server app that connects to the database using mongoose API and performs UR CRUD operations. 
