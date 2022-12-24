<<<<<<< HEAD
//how to create arrays in JS:
const data = [];
const fruits = ["Apples", "Mangoes", "Bananas"];
for(let i =0; i < fruits.length; i++)
    console.log(fruits[i]);
//JS arrays behave like Collections. U can add, remove, update items in the array after creating it. 
fruits.push("Oranges");//Adds an element to the collection at the bottom of the array
console.log("-----------------adding------------------------------")
fruits.unshift("PineApples");//Adds an element to the begining of the collection. 
//splice is one method that allows to insert, delete and replace. 
console.log("------------------Inserting-----------------------------")
fruits.splice(2, 0, "Kiwi Fruit");//For inserting in b/w...
for(const item of fruits) console.log(item)
console.log("------------------Removing-----------------------------")
fruits.splice(2, 1);//Removes no of items passed as 2nd arg from the index passed as 1st arg..
for(const item of fruits) console.log(item)
console.log("------------------Replacing-----------------------------")
fruits.splice(2, 1, "Gauva", "Papaya")
for(const item of fruits) console.log(item)
//Array is an object of a class called Array. As it is an object, JS allows to iterate thru the data using key..Practical purpose of using for...in is with objects of a class.
for(const index in fruits){
    console.log("Key: " + index + "   Value: " + fruits[index]);
}
console.log("------------------For each -----------------------------")
fruits.forEach(function(value, index){
    console.log("Key: " + index + "   Value: " + value)
})//The function is passed as an argument to the function. This is called as Callback functions. 

//for loop can be used to move forward or backward by any number. However, U should be aware of the size of the collection. for..in and for...of are safer way of iterating the elements of a collection as they dont go out of bounds. They are always forward only and read only. 
//foreach is a function of the Array class that can also be used for iterating the elements of the collection. It takes an arg of a callback function 


=======
//how to create arrays in JS:
const data = [];
const fruits = ["Apples", "Mangoes", "Bananas"];
for(let i =0; i < fruits.length; i++)
    console.log(fruits[i]);
//JS arrays behave like Collections. U can add, remove, update items in the array after creating it. 
fruits.push("Oranges");//Adds an element to the collection at the bottom of the array
console.log("-----------------adding------------------------------")
fruits.unshift("PineApples");//Adds an element to the begining of the collection. 
//splice is one method that allows to insert, delete and replace. 
console.log("------------------Inserting-----------------------------")
fruits.splice(2, 0, "Kiwi Fruit");//For inserting in b/w...
for(const item of fruits) console.log(item)
console.log("------------------Removing-----------------------------")
fruits.splice(2, 1);//Removes no of items passed as 2nd arg from the index passed as 1st arg..
for(const item of fruits) console.log(item)
console.log("------------------Replacing-----------------------------")
fruits.splice(2, 1, "Gauva", "Papaya")
for(const item of fruits) console.log(item)
//Array is an object of a class called Array. As it is an object, JS allows to iterate thru the data using key..Practical purpose of using for...in is with objects of a class.
for(const index in fruits){
    console.log("Key: " + index + "   Value: " + fruits[index]);
}
console.log("------------------For each -----------------------------")
fruits.forEach(function(value, index){
    console.log("Key: " + index + "   Value: " + value)
})//The function is passed as an argument to the function. This is called as Callback functions. 

//for loop can be used to move forward or backward by any number. However, U should be aware of the size of the collection. for..in and for...of are safer way of iterating the elements of a collection as they dont go out of bounds. They are always forward only and read only. 
//foreach is a function of the Array class that can also be used for iterating the elements of the collection. It takes an arg of a callback function 


>>>>>>> e3b7befb269f3285234b86b26688e1266fbf48df
