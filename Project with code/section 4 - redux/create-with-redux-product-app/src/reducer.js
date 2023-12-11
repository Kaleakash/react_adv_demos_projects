let initialState = {
    employees:[
        {id:100,name:"Ravi",age:21},
        {id:101,name:"Ramesh",age:22}
    ]
}

function reducer(state=initialState,action){
    // base upon action we can do the changes on state variable. 
    // which is consider as global state
    console.log(action);
    if(action.type=="ADD_EMPLOYEE"){
        return {
            ...state,employees:state.employees.concat(action.payload)
            //...state,employees:[...state.employees,action.payload]
        }
    }
    if(action.type=="DELETE_EMPLOYEE"){
        return {
            ...state,employees: state.employees.filter(e=> e.id !== action.payload)   
        }
    }
    return state;
}

export default reducer;
