import axios from "axios";


export const ADD_EMPLOYEE="Add Employee details";
export const LOAD_EMPLOYEE = "Load Employee details";
export const EMPLOYEE_ERROR="Employee Error Generated"


export function addEmployee(newEmp){
    return function(dispatch){
        console.log(newEmp);
        axios.post("http://localhost:3000/employees", newEmp.payload)
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
  console.log("Employee Loaded...")
    return function(dispatch){
        axios.get("http://localhost:3000/employees").then(function(response){
          console.log(response)
          dispatch({type:LOAD_EMPLOYEE, payload: response.data})
        })
        .catch(function(err){
          dispatch({type:EMPLOYEE_ERROR, payload:"There was an error"})
        })
      }        
    }

