import React from 'react';
import {connect} from 'react-redux';
import employeeReducer from '../reducers/EmployeeReducers';
import { LOAD_EMPLOYEE, loadEmployee } from '../actions/EmployeeActions';

class DisplayEmployee extends React.Component {
  constructor(props){
    super(props);
    this.props.loadEmployee();
  }
   
  render() {
    console.log(this.props)

    const EleRow = this.props.employee.map((ele,i)=> 
    <tr key={i}><td>{ele.id}</td><td>{ele.name}</td><td>{ele.salary}</td></tr>)
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
          {EleRow}
          </tbody>
        </table>
      </div>
    )
  }
}
const mapStateToProps=(state)=>( {
  employee : state.employee
})
const mapActionsToProps = {
    loadEmployee : loadEmployee
}
//export default App;
export default connect(mapStateToProps,mapActionsToProps)(DisplayEmployee)
