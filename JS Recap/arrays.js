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
