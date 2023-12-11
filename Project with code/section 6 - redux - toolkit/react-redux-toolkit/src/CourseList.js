import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCourseDetails, deleteCourseDetails } from './courseSlice';

const CourseList = ()=> {
    const courses = useSelector((state)=> state.course);

    const dispatch = useDispatch();

    const [editableCourseId,setEditableCourseId]=useState(null);
    const [editName,setEditName]=useState("");

    const handleDelete= (id)=> {
        dispatch(deleteCourseDetails(id));
    }

    const handleEdit = (course)=> {
        setEditName(course.name);
        setEditableCourseId(course.id);
    }
    const handleUpdate = (course)=> {
        dispatch(editCourseDetails(
            {
                id:course.id,
                name:editName
            }
        ));
        setEditableCourseId(null);
  }
 
  return(
  <div className='container'>

    <div>
            <div className='row offset-3'>
                <div className='col-7'>
                    <h4>All Course Details</h4>
                </div>
            </div>
            <div className='row offset-3'>
                <div className='col-9'>

                <table className='table table-stripped'>
    
    {
        courses.map((course)=> (
            
                
                <tr key={course.id}>
                {
                    editableCourseId===course.id ? (
                        <div>
                            <td><input type="text" value={editName}
                            onChange={(e)=>setEditName(e.target.value)} /></td>
                            <td><input type="button" value="Update" onClick={(e)=>handleUpdate(course)} className='btn btn-success'/></td>
                            <td><input type="button" value="Delete" onClick={(e)=>handleDelete(course.id)} className='btn btn-secondary'/></td>
                        </div>
                        ):
                        (
                            <div>
                            <td>{course.name}</td>
                            <td><input type="button" value="Edit" onClick={(e)=>handleEdit(course)} className='btn btn-success'/></td>
                            <td><input type="button" value="Delete" onClick={(e)=>handleDelete(course.id)} className='btn btn-secondary'/></td>
                            </div>
                        )
                        }
            </tr>
            ))}        
        
    </table>



                </div>
            </div>
    </div>
    {/* <h2>Course List</h2>
    <ul>
    {
        courses.map((course)=> (
            <li key={course.id}>
                {
                    editableCourseId===course.id ? (
                        <div>
                            <input type="text" value={editName}
                            onChange={(e)=>setEditName(e.target.value)} />
                            <input type="button" value="Update" onClick={(e)=>handleUpdate(course)}/>
                            <input type="button" value="Delete" onClick={(e)=>handleDelete(course.id)}/>
                        </div>
                        ):
                        (
                            <div>
                                {course.name}
                                <br/>
                            <input type="button" value="Edit" onClick={(e)=>handleEdit(course)}/>
                            <input type="button" value="Delete" onClick={(e)=>handleDelete(course.id)}/>
                            </div>
                        )
                        }
            </li>
        ))}
    </ul> */}


  </div>
  );

}

export default CourseList;