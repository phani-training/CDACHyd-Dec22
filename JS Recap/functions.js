<<<<<<< HEAD
//3 ways to create functions.
function addFunc(v1, v2 = 123) { //Named functions in JS....
    return v1 + v2;
}

//parameter and argument: 
//parameter is what U declare for a function, args are values U pass when the function is called. 
console.log("Add Func: " + addFunc(123, 234)) 

//Anonymous method
const subFunc = function(v1, v2){
    return v1 - v2
}
console.log("Sub Func: " + subFunc(123, 234)) 

//Lambda Method:
const mulFunc = (v1, v2) =>  v1 * v2;  

//rest parameter is to pack the values passed to the function as an array.  
const sum = (...args) =>{
   let res = 0;
   for (const val of args) {
     res += val; 
   }
   return res;   
}

=======
//3 ways to create functions.
function addFunc(v1, v2 = 123) { //Named functions in JS....
    return v1 + v2;
}

//parameter and argument: 
//parameter is what U declare for a function, args are values U pass when the function is called. 
console.log("Add Func: " + addFunc(123, 234)) 

//Anonymous method
const subFunc = function(v1, v2){
    return v1 - v2
}
console.log("Sub Func: " + subFunc(123, 234)) 

//Lambda Method:
const mulFunc = (v1, v2) =>  v1 * v2;  

//rest parameter is to pack the values passed to the function as an array.  
const sum = (...args) =>{
   let res = 0;
   for (const val of args) {
     res += val; 
   }
   return res;   
}

>>>>>>> e3b7befb269f3285234b86b26688e1266fbf48df
