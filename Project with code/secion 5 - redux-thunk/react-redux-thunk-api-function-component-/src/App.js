import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayEmployee from './components/DisplayComponent';
import AddEmployee from './components/AddEmployee';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="container">
        <h2>React With Redux Example</h2>
        <AddEmployee></AddEmployee>
        <DisplayEmployee></DisplayEmployee>
      </div>
    )
  }
}

export default App;
