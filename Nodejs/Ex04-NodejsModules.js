const fs = require("fs");//This is the syntax for referring in built modules of nodejs
const os = require("os");//This is the module to interact with OS of the machine
////////////////////Example on Sync File Reading///////////////////////////////
// const data = fs.readFileSync("./CartIIFE.js", 'utf8');//English text format
// console.log(data)

////////////////////Example on Async File Reading///////////////////////////////
//Use the async version of the File reading...
// fs.readFile('./Ex04-NodejsModules.js','utf-8', (err, data)=>{  
//     if (err)
//         console.log(err)
//     else
//         console.log(data)
// });

// console.log("The file reading is complete")//Test this line after placing it in line 5 for testing sync operation. 
////////////////////Example on Sync File Writing///////////////////////////////
//fs.writeFileSync("SampleTextFile.txt", "Contents of the file that I want to place in the file", "utf-8"); //Creates a new File and writes the contents to the file, if the file already exists, it would replace the contents with the new content. 
////////////////////Example on Async File Writing///////////////////////////////
// fs.writeFile("SampleTextFile.txt", "New content using Async", (err)=>{
//     if(err) console.log(err)
//     console.log("File written successfully")
// })

////////////////////Example on Async File Appending///////////////////////////////
// fs.appendFile("SampleTextFile.txt", "This line is appended to the next line in the file\n", (err)=>{
//     if(err) console.log(err);
//     console.log("File appended successfully")
// });
//Assignment: Create a Nodejs App that stores the data in the form of Comma Seperated Value file(.CSV file). The data should be an array of employees hardcoded and written to the file. 123, Phaniraj, Bangalore, 56000//Explore Some APIs of JS to split each sentence based on ,
////////////////////Example on Os module///////////////////////////////
// console.log(os.userInfo());
// console.log(os.version())
// console.log(os.hostname())
// console.log(`The OS is up and running for ${os.uptime()/3600} hrs`);
// const cpuInfos = os.cpus();
// for(const info of cpuInfos){
//     console.log(JSON.stringify(info))
// }
// console.log(`The no of CPUs of this machine is ${os.cpus().length}`)
// console.log(`The total memory of this PC is ${os.totalmem()}`);
// console.log(`The Free memory of this PC is ${os.freemem()}`);
// //Assignment: Display the total memory and free memory of UR OS in the units of GB.

