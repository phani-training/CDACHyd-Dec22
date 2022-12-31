const express = require("express");
const app = express();
const dir = __dirname;
app.use('/css', express.static(dir + "/node_modules/bootstrap/dist/css"))
app.use('/js', express.static(dir + "/node_modules/jquery/dist/"))

app.get("/", (req, res) => res.sendFile(dir + "/MongooseClientApp.html"))
app.listen(4321, ()=>{
    console.log("Server at port: 4321");
})