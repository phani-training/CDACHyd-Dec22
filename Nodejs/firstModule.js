//A module can contain functions, classes in it. 
module.exports.table = function(num = 5){
    console.log(`Multiplication Table for ${num}`);
    for(let i =1; i <=10 ; i++){
        console.log(`${num} X ${i} = ${num * i}`)
    }
    console.log("End of the Table")
}

module.exports.addFunc = (v1, v2) => v1 + v2;

module.exports.employee = class {
    constructor(id, name, address){
        this.id = id;
        this.address = address;
        this.name = name;
    }

    display = () =>`${this.name} from ${this.address} with Id ${this.id}`
}