const importedModule = require("./firstModule")//Importing the module
const tableFunc = importedModule.table;//Creating an alias Func
const addFunc = importedModule.addFunc;
const empClass = importedModule.employee;
//const tableFunc = require("./table").table;
tableFunc()
//importedModule.table(); //=>U need not create allias names. 

console.log(addFunc(123, 234))

const obj = new empClass(123, "Phaniraj", "Bangalore");
const secondObj = new empClass(124, "TestName", "TestAddress");
console.log(secondObj.display())
console.log(obj)
console.log(obj.display())