//Represents one Employee =>Entity classes
class Employee{
    constructor(id, name, address, salary){
        this.id = id;
        this.name = name;
        this.address = address;
        this.salary = salary
    }
}
//This class will have the data and CRUD operations to be performed on the data. 
class EmployeeRepo{
    data = [
        new Employee(111, "Phaniraj", "Bangalore", 56000),
        new Employee(112, "Brad Pitt", "Panaji", 46000),
        new Employee(113, "Thompson", "Pune", 78000),
        new Employee(114, "Andrew Corbert", "New Delhi", 80000)
    ];

    addNewEmployee(emp){
        this.data.push(emp);
    }

    deleteEmployee(id){
        //find the index of the Employee with the matching Id passed as argument.
        const index = this.data.findIndex((emp)=>emp.id == id);
        if(index < 0)
            throw "No Employee is found with the matching ID";
        this.data.splice(index, 1);    
    }

    getAllEmployees(){
        return this.data;
    }

    getEmployeeById(id){
        for (const emp of this.data) {
            if(emp.id == id)
                return emp;
        }
        throw "No Employee by this iD is found with us!!!";
    }

    modifyEmployee(modifiedEmp){
        const index = this.data.findIndex((emp)=>emp.id == modifiedEmp.id);//assumption: Id is not changed
        this.data.splice(index, 1, modifiedEmp);
    }
}
