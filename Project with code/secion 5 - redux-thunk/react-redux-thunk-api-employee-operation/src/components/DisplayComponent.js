import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadEmployee } from '../actions/EmployeeActions';

function DisplayEmployee() {
let employees = useSelector(gs=>gs.employee);
let dispatch = useDispatch();
console.log(employees);
useEffect(()=> {
  const loadData=()=> {
      dispatch(loadEmployee());
  }
  loadData();
},[])
  return(
    <div>
         <h3>Employee Details are </h3>
         <table border="1" className="table table-striped">
           <thead>
             <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Salary</th>
             </tr>
           </thead>
           <tbody>
           {employees.map((ele,i)=> 
      <tr key={i}><td>{ele.id}</td><td>{ele.name}</td><td>{ele.salary}</td></tr>)
           }   
        </tbody>
         </table>
       </div>
  )
}
export default DisplayEmployee;



