import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import {addEmployee,ADD_EMPLOYEE, loadEmployee} from '../actions/EmployeeActions';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function AddEmployee() {
let [employee,setEmployee]=useState({});
let dispatch = useDispatch();  

let storeEmployeeInfo=async (event) => {
      event.preventDefault();
      let result = await dispatch(addEmployee({type:"ADD_EMPLOYEE",payload:employee}));
      console.log(result);  
      setEmployee({id:"",name:"",salary:""})
   }
return(
       <div className="container">
         <h2>Add Employee Details</h2>
         <form onSubmit={storeEmployeeInfo} className="form-group col-md-12">
          Id <input type="text" name="id" value= {employee.id} onChange={
            (event)=>setEmployee({...employee,"id":event.target.value})
          } 
          className="form-control"
          
          /><br/>
           Name <input type="text" name="name" value= {employee.name} onChange={
            (event)=>setEmployee({...employee,"name":event.target.value})
          }  className="form-control"/>
          
          <br/>
          Salary <input type="text" name="salary" value= {employee.salary} onChange={
            (event)=>setEmployee({...employee,"salary":event.target.value})
          }  className="form-control"/>
          
          <br/> 
         <input type="submit" value="Store Record" className="btn btn-primary"/>
         </form> 
       </div>
)
}

export default AddEmployee;


