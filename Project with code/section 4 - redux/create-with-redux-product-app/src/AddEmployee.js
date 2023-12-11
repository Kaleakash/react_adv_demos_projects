import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddEmployee() {
//useDispatch is pre defined hook 
// which help to pass action and payload (data)
// to reducer. 
let [employee,setEmployee]=useState({id:0,name:"",age:0.0})
let dispatch = useDispatch();
let employees = useSelector(gs=>gs.employees);
let addEmployee = (event)=> {
    event.preventDefault();
    //console.log(employee)
    let result  = employees.find(e=>e.id==employee.id);
    if(result==undefined){
        dispatch({type:"ADD_EMPLOYEE",payload:employee})
    }else {
        alert("Employee id must be unique")
    }
    setEmployee({id:0,name:"",age:0.0})
}

    return(
    <div>
       <h2>Add Employee</h2>
       <form onSubmit={addEmployee}>
       <label>Id</label>
       <input type="number" name="employee.id" value={employee.id} onChange={(event)=> {
        setEmployee(e=>{return {...e,id:event.target.value}})
       }}/><br/>
       <label>Name</label>
       <input type="text" name="employee.name" value={employee.name} onChange={(event)=> {
        setEmployee(e=>{return {...e,name:event.target.value}})
       }}/> <br/>
       <label>Age</label>
       <input type="number" name="employee.age" value={employee.age} onChange={(event)=> {
        setEmployee(e=>{return {...e,age:event.target.value}})
       }}/><br/>
       <input type="submit" value="Add Employee" />
       <input type="reset" value="reset"/>
       </form>
    </div>
    )
}

export default AddEmployee;