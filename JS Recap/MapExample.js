<<<<<<< HEAD
//Map and Set were the new Data Structures added in ES6.
const words = new Map();
for(let i = 0; i < 5; i++){
    let key= prompt("Enter the word");
    let value = prompt("Enter the meaning of the word");
    if(words.has(key)){//check if the key already exists in the words collection. 
        alert("This word already exists");
    }else{
        words.set(key, value);//adds the key-value pair to the map. 
    }
}
//Key part of the collection is unique for the collection and the value part is not guaranteed to be unique. 
console.log("The total no of words: " + words.size)
//Map and HashMap<
for(const key of words.keys()){
    console.log(`Key: ${key}---->Value:${words.get(key)}`)
=======
//Map and Set were the new Data Structures added in ES6.
const words = new Map();
for(let i = 0; i < 5; i++){
    let key= prompt("Enter the word");
    let value = prompt("Enter the meaning of the word");
    if(words.has(key)){//check if the key already exists in the words collection. 
        alert("This word already exists");
    }else{
        words.set(key, value);//adds the key-value pair to the map. 
    }
}
//Key part of the collection is unique for the collection and the value part is not guaranteed to be unique. 
console.log("The total no of words: " + words.size)
//Map and HashMap<
for(const key of words.keys()){
    console.log(`Key: ${key}---->Value:${words.get(key)}`)
>>>>>>> e3b7befb269f3285234b86b26688e1266fbf48df
}   