
import './App.css';
import { Couter } from './Couter';
import { DecrementCounter } from './DecrementCounter';
import { IncrementCounter } from './IncrementCounter';

function App() {
  return (
    <div className="App">
      <Couter></Couter>
      <hr/>
      <IncrementCounter></IncrementCounter>
      <DecrementCounter></DecrementCounter>
    </div>
  );
}

export default App;
