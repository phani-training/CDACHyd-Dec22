const shoppingApp = require("./CartIIFE");
//U will not create an object, U actually get the object directly.
console.log(shoppingApp)//Displays the object info

shoppingApp.addItem({id:111, itemName :"SONY BRAVO TV", price : 100000})
shoppingApp.addItem({id:112, itemName :"SAMSUNG INFERNO TV", price : 90000})
shoppingApp.addItem({id:113, itemName :"PANASONIC TV", price : 65000})
shoppingApp.addItem({id:114, itemName :"BPL TV", price : 45000})
shoppingApp.addItem({id:115, itemName :"MI TV", price : 35000})

const items = shoppingApp.getAll();

//display the items as table in Console
console.table(items);

items.forEach((value)=>{
    console.log(value.itemName)
})

const selectedItem = shoppingApp.findItem(113);
console.log("The Found Item: " + selectedItem.itemName)