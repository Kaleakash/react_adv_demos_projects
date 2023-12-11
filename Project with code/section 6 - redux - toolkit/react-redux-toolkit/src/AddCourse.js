import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addCourseDetails } from './courseSlice';



const AddCourse = ()=> {
    const dispatch = useDispatch();
    const [name,setName]=useState("");

    const handleSubmit = ()=> {
        dispatch(addCourseDetails({id:Date.now(),name}));
        setName("");
    }

    return(
        <div className='container'>
            <div className='row offset-4'>
                <div className='col-4'>
                    <h4>Add Course</h4>
                </div>

            </div>

            <div className='row offset-4'>
                <div className='col-4'>
            
                <input type="text" 
                placeholder='Add Course'
                value={name}
                onChange={e=>setName(e.target.value)} className='form-control'
                />

                </div>

                <div className='col-4'>
                <input type="button" value="Add Course" onClick={handleSubmit} className='btn btn-primary'/>
                </div>

            </div>
        
        </div>
    )
}

export default AddCourse;