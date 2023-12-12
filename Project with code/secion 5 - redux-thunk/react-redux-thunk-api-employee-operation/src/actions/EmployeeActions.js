import axios from "axios";


export const ADD_EMPLOYEE="Add Employee details";
export const LOAD_EMPLOYEE = "Load Employee details";
export const EMPLOYEE_ERROR="Employee Error Generated"


export function addEmployee(data){
    return function(dispatch){
        axios.post("http://localhost:3000/employees", data.payload)
        .then(function(response){
          console.log(response)
          dispatch({type:ADD_EMPLOYEE, payload: response.data})
        })
        .catch(function(err){
          dispatch({type:EMPLOYEE_ERROR, payload: "There was an error."})
        })
      }
}

export function loadEmployee() {
    return function(dispatch){
        axios.get("http://localhost:3000/employees").then(function(response){
          dispatch({type:LOAD_EMPLOYEE, payload: response.data})
        })
        .catch(function(err){
          dispatch({type:EMPLOYEE_ERROR, payload:"There was an error"})
        })
      }        
    }

