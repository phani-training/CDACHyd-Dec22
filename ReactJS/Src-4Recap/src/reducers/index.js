import { ADD_EMP, DELETE_EMP, UDPATE_EMP, FIND_EMP } from "../actions/types";
export default function DataReducer(state =[], action){
    switch (action.type) {
        case ADD_EMP:
            return[ ...state, action.payload ];
        case DELETE_EMP:
            return state.filter(rec => rec.empId !== action.payload.id)
        default:
            return state;
    }
}