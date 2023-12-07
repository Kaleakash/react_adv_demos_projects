import './App.css';
import {Routes,Route, Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
      
      <NavBar />
    
      <hr/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
