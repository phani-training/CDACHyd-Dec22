//HTTP is a protocol for accessing web pages across internet. 
//http module of nodejs has apis to create web servers to create apps that will process the http requests made by the user.
const http = require("http");
const fs = require("fs");

const currentDir = __dirname;
http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/Employees")
        res.write("List of Employees with Us!!!");
    else if(req.url == "/Client"){
        fs.createReadStream(currentDir + "\\Client.html").pipe(res);
        return;//exit the loop
    }else 
        res.write("Hello from my Web server")
    res.end();
}).listen(1234);