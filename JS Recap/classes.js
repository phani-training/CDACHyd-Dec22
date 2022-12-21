//3 ways of creating classes in JS. Singleton, Old way(Function based) and new way(Class). 

///////////////////Singleton: One instance of any object/////////////////
const obj = {};//creates an object. 
obj.id = 123;
obj.name = "TestName";
obj.email ="test@email.com";
obj.salary = 45000;
obj.display = function(){
    console.log("The Name is " + obj.name + " with email address as " + obj.email)
}
const obj2 = obj;//As the object is a singleton(1 Instance), U just created an alias.
obj2.name = "New Name";
// console.log(obj.salary)
console.log("The new guy:"+ obj2.name)
console.log("The old guy: " + obj.name)

// console.log(obj.email)
// console.log(obj)
// //field is like a KEY and the value for the field is the value(It is similar to MAP)
// for (const key in obj) {
//     console.log(obj[key])//Similar to HashMap<K,V> of Java. 
// }

// obj.display();
//////////////////////Function based Classes///////////////
const employee = function(id, name, email, salary){
    this.empId = id;
    this.empName = name;
    this.empSalary = salary;
    this.empEmail = email;
    this.display = function(){
       console.log(`The Name: ${this.empName} is available at ${this.empEmail}. The Salary is ${this.empSalary}`)//new in ES 6..
    }
}
//With new operator, U create new instance of the object and will not affect the other objects. 
const emp1 = new employee(123, "Phaniraj", "phanirajbn@gmail.com", 45000);
console.log(emp1)

const emp2 = new employee(124, "Robert Vilal", "robert@gmail.com", 78000);
console.log(emp2)

const emp3 = new employee(emp1.empId, emp1.empName, emp1.empEmail, emp1.empSalary);
emp3.empName = "Julia Roberts";

const empList = [emp1, emp2, emp3];
// emp3.display()
// emp1.display();
// emp2.display();
for(const emp of empList)
    emp.display();
console.clear();
////////////////////////////////New way using ES6 feature///////////////////
//By default, all members are public in JS. 
class Customer{
    #id = 0; //private members in JS...
    #name = "";
    constructor(){
        this.id = 0;
        this.name = "";
        this.address = "Bangalore";
        this.billAmount = 0
    }

    setValues(id, name){
        this.#name = name;
        this.#id = id;
    }

    addItemToBill(amount){
        this.billAmount += amount;
    } 
}

const cst = new Customer();
cst.billAmount = 1000;
cst.name = "Suresh"
cst.addItemToBill(345);
cst.setValues(123, "TempName");
console.log(cst);
console.clear();