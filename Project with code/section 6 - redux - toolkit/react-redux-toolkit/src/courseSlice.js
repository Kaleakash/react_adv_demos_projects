import { createSlice } from "@reduxjs/toolkit";
const courseSlice = createSlice({
    name:"course",
    initialState:[],
    reducers: {
        addCourseDetails: (state,action)=> {
                state.push(action.payload);
        },
        editCourseDetails:(state,action)=> {
                const {id,name}= action.payload;
                const course = state.find((cc)=>cc.id==id);
                if(course){
                    course.name  = name;
                }
        },
        deleteCourseDetails:(state,action)=> {
                return state.filter((course)=>course.id!==action.payload);
        }
    }
});

export const {addCourseDetails,editCourseDetails,deleteCourseDetails}=courseSlice.actions;
export default courseSlice.reducer;