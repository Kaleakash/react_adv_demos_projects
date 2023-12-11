import { useSelector } from "react-redux";
import DeleteEmployee from "./DeleteEmployee";

function DisplayEmployee() {
let employees = useSelector(gs=>gs.employees);

let employeeRecord = employees.map((e,index)=>
<tr key={index}>
    <td>{e.id}</td>
    <td>{e.name}</td>
    <td>{e.age}</td>
    <td><DeleteEmployee id={e.id}/></td>
   
</tr>
)
return(
    <div>
        <h2>Employee Details</h2>
        <table border="1">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {employeeRecord}
            </tbody>
        </table>
    </div>
)
}

export default DisplayEmployee;