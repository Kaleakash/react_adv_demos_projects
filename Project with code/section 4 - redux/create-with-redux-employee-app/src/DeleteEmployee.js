import { useDispatch } from "react-redux";

function DeleteEmployee({id}){
    let dispatch = useDispatch();
    return(
        <div>
            <td><input type="button" value="Delete" 
            onClick={()=>dispatch({type:"DELETE_EMPLOYEE",payload:id})}/></td>
        </div>
    )
}


export default DeleteEmployee;