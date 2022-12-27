const http = require("http");
const fs = require("fs");
const parse = require("url").parse;//For HTTP GET operations
const qs = require("querystring");//For HTTP POST operations. 
const fileName = "Data.csv";

const data = require("./MyData.json");
const books = [
    {id: 111, "title" : "Book 1", author : "Author1" , price : 450},
    {id: 112, "title" : "Book 2", author : "Author2" , price : 400},
    {id: 113, "title" : "Book 3", author : "Author3" , price : 350},
    {id: 114, "title" : "Book 4", author : "Author4" , price : 470},
    {id: 115, "title" : "Book 5", author : "Author5" , price : 400}
]

function errorPage(res){
    res.writeHead(200, {"Content-type" : "text/html"});
    res.write("<h1 style='color: red'>Error Page</h1>")
    res.write("<hr/>")
    res.write("<p>This page does not exist");
}

function processGet(req, res){
    const query = parse(req.url).query;
    if(query != null){
        let obj = parse(req.url, true).query;
        const msg = `<p>Thanks Mr. ${obj.empName} and UR Email Address ${obj.empEmail} has been registered with us</p>`;
        const entry = `${obj.empName}, ${obj.empEmail}\n`;
        fs.appendFileSync(fileName, entry, 'utf-8');
        res.write(msg);
        res.end();
        return;
    }
}

function processPost(req, res){
    let inputValues = "";
    req.on("data", function(result){//Triggered when the Form is posted to the server. 
        inputValues += result;
    })
    req.on("end", function(){//POSTED Reaches the server. 
        let postedInfo = qs.parse(inputValues);
        const msg = `<p>Thanks Mr. ${postedInfo["empName"]} and UR Email Address ${postedInfo["empEmail"]} has been registered with us</p>`;
        console.log(postedInfo)
        const entry = `${postedInfo["empName"]}, ${postedInfo["empEmail"]}\n`;
        fs.appendFileSync(fileName, entry, 'utf-8');
        res.write(msg);
        res.end();
        return;
    })
}

function ShowAll(res){
    const collection =[];
    const data = fs.readFileSync(fileName, 'utf-8');
    for(const line of data.split("\n")){
        const words = line.split(",");
        collection.push({"name": words[0], "email":words[1]});
    }
    console.table(collection);
    res.write(JSON.stringify(collection));
    res.end();
    return;
}
//request means input message, response is output message
http.createServer((req, res)=>{
    if(req.method == "GET"){
        processGet(req, res);
    }else if(req.method == "POST"){
        processPost(req, res);
    }
    switch(req.url){
        case "/Employees":
            res.write(JSON.stringify(data));
            break;
        case "/Books":
            res.write(JSON.stringify(books))
            break;
        case "/Register":
            fs.createReadStream("./Registration.html").pipe(res);
            return;
        case "/Client":
            //read the Client.html, push the content to response.
            fs.createReadStream("./Client.html").pipe(res);
            return;
        case "/ShowAll":
            ShowAll(res);
            //fs.createReadStream(".Table.html").pipe(res);
            return;
        default:
            errorPage(res);
            break;
    }
res.end();
}).listen(1234);