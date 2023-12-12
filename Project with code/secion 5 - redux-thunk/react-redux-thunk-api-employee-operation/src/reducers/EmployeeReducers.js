import {ADD_EMPLOYEE,LOAD_EMPLOYEE,EMPLOYEE_ERROR} from '../actions/EmployeeActions';

export default function employeeReducer(state=[],action) {
    console.log("Action is "+action)
    switch(action.type){
        case LOAD_EMPLOYEE:
                return action.payload;

         case ADD_EMPLOYEE: 
                return [...state, action.payload]

        case EMPLOYEE_ERROR:
                return action.payload;
        
         default:return state;

    }
}