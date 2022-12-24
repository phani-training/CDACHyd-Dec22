<<<<<<< HEAD
//3 ways of creating data: let(prefered), var(obselete), const(Non changing values). 
for(let x =0; x <10; x++){
    console.log(x)
}
console.log(x)

var x = 123;//var will be hoisted to the global object window if it is used in a browser or globalObject if used in Nodejs. 
console.log(window.x)

let name = "Apple";
console.log(window.name)

var ex = 234;//check this code by replacing var with let and see the diff...
function test(){
    var ex = 123;
    console.log("Ex value: " + ex)
    {
        var ex = 456;
    }
    console.log("Ex value: " + ex)
}
console.log("Ex value: " + ex)
test();
=======
//3 ways of creating data: let(prefered), var(obselete), const(Non changing values). 
for(let x =0; x <10; x++){
    console.log(x)
}
console.log(x)

var x = 123;//var will be hoisted to the global object window if it is used in a browser or globalObject if used in Nodejs. 
console.log(window.x)

let name = "Apple";
console.log(window.name)

var ex = 234;//check this code by replacing var with let and see the diff...
function test(){
    var ex = 123;
    console.log("Ex value: " + ex)
    {
        var ex = 456;
    }
    console.log("Ex value: " + ex)
}
console.log("Ex value: " + ex)
test();
>>>>>>> e3b7befb269f3285234b86b26688e1266fbf48df
