export function getEmployees(){
    console.log("get Employees is called");
    return dispatch =>{
        return dispatch({
            type : 'GETEMP'
        })
    }
}

export function addEmployee(data){
    console.log("Add employee is triggered");
    return dispatch =>{
        return dispatch({
            type : 'ADDEMP',
            payload : data
        })
    }
}

export function deleteEmployee(empId){
    return dispatch => {
        return dispatch({
            type : 'DELEMP', 
            payload : empId
        })
    };
}