import React from 'react';
import {connect} from 'react-redux';
import {addEmployee,ADD_EMPLOYEE, loadEmployee} from '../actions/EmployeeActions';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
class AddEmployee extends React.Component {
  constructor(props){
    super(props);
    this.state = {id:0,name:"",salary:0.0}
  }
  storeEmployeeInfo=(event) => {
    event.preventDefault();
    const empAction = {
      type:ADD_EMPLOYEE,
      payload:{
          id: eval(this.state.id),
          name:this.state.name,
          salary:eval(this.state.salary)
      }
  }
  this.props.storeEmployeeInfo(empAction)
  this.props.loadEmployee();
  }
  changeValue=(event)=> {
    this.setState({[event.target.name]:event.target.value});
  }
  render() {
  
    return(
      <div className="container">
        <h2>Add Employee Details</h2>
        <form onSubmit={this.storeEmployeeInfo} className="form-group col-md-12">
         Id <input type="text" name="id" onChange={this.changeValue} className="form-control"/><br/>
         Name <input type="text" name="name" onChange={this.changeValue} className="form-control"/><br/>
         Salary <input type="text" name="salary" onChange={this.changeValue} className="form-control"/><br/>
        <input type="submit" value="Store Record" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}
const mapStateToProps=(state)=>( {
  employee : state.employee
})
const mapActionsToProps = {
  storeEmployeeInfo : addEmployee,
  loadEmployee : loadEmployee

}

export default connect(mapStateToProps,mapActionsToProps)(AddEmployee)
