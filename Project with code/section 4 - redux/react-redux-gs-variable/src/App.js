import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import SeconComponent from './SecondComponent';
import Customer from './Customer';

function App() {
  return (
    <div className="App">
      <h3>Main Component</h3>
      <hr/>
      <FirstComponent></FirstComponent>
      <hr/>
      <SeconComponent></SeconComponent>
      <hr/>
      <Customer></Customer>
    </div>
  );
}

export default App;
