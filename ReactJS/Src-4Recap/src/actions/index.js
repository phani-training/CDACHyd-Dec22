import { ADD_EMP, DELETE_EMP, UDPATE_EMP, FIND_EMP } from './types'
//An Action is simply an object that has 2 properties: type(ID of UR action), payload(data that U want to send)

export const addEmp = ({empId, empName, empAddress}) =>({
    type: ADD_EMP,
    payload : {empId, empName, empAddress}
});

export const deleteEmp = id =>({
    type: DELETE_EMP,
    payload : {
        id
    }
})

export const updateEmp = ({empId, empName, empAddress}) =>({
    type: UDPATE_EMP,
    payload : {empId, empName, empAddress}
});

export const findEmp = id =>({
    type: FIND_EMP,
    payload : {
        id
    }
})
