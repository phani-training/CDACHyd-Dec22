//install the mongodb node package: npm install mongodb

const mongo = require("mongodb").MongoClient;//
const dbUrl = "mongodb://localhost/SampleDatabase";

let database;

mongo.connect(dbUrl).then((obj)=>{
    database = obj.db("SampleDatabase");
    database.collection("employees").find().toArray().then((Data)=>{
        Data.forEach((val)=> console.log(val.EmpName))
    })
})
