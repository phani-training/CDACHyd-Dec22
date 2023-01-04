//initial state:
const initialState = {
    employees : [
        {id : 123, empName : "Phaniraj", empDept: ".NET Team"},
        {id : 124, empName : "JoyDip Mondal", empDept: ".NET Team"},
        {id : 125, empName : "Vinod", empDept: "Java Team"},
        {id : 126, empName : "Ramakrishna", empDept: "OpenSource Team"},
    ]
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GETEMP':
            return{
                ...state //spread operator
            };
        case 'ADDEMP':
            return{
                ...state,
                employees : state.employees.concat(action.payload)
            };
        case "DELEMP":
            return{
                ...state, 
                employees : state.employees.filter(item =>item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;