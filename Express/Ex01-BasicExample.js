const express = require('express');
const app = express();
const parser = require('body-parser'); 

const root = __dirname;//This is the current directory...__dirname is a const of nodejs that always points to the current directory of UR Application. 

//const url = (file) => `${root}/${file}.html`;
app.use(parser.urlencoded({extended :false})) //using the parser into the Application for processing body content of the POSTED data. 

app.get("/", (req, res) => res.send("Welcome to Express Framework"))

app.get("/Employees", (req, res) => res.send("Employees data will come here"))

app.get("/Client", (req, res) => res.sendFile(root + "/Client.html"))

app.get("/Register", (req, res) => res.sendFile(root + "/Registration.html"));

app.get("/AfterRegister", (req, res) =>{
    const name = req.query.empName;
    const email = req.query.empEmail;
    const msg = `Mr. ${name}, Thanks for joining us!!!<br/>U will be contacted using ${email} as UR point of contact`;
    res.send(msg)
})

app.post("/AfterRegister", (req, res)=>{
    if(req.body == undefined){//this section will execute if U have not used the parser. 
        console.log("No Body is formed in the POST");
    }else{
        const name = req.body.empName;
        const email = req.body.empEmail;
        const msg = `<h1>POSTED DATA</h1><hr/>Mr. ${name}, Thanks for POSTING and joining us!!!<br/>U will be contacted using ${email} as UR point of contact`;
    res.send(msg)
    }
})

app.listen(1234, ()=> console.log("Server is available at 1234"))