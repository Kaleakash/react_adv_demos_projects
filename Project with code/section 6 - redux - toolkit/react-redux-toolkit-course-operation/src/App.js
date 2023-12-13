import logo from './logo.svg';
import './App.css';
import AddCourse from './AddCourse';
import CourseList from './CourseList';
function App() {
  return (
    <div className="App">
     <AddCourse></AddCourse>
     <hr/>
     <CourseList></CourseList>
    </div>
  );
}

export default App;
