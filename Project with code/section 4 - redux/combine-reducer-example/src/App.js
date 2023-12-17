import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement,handleLoggin} from './actions'


import './App.css';

function App() {
  //next line will allow us to grab the state inside counter. So it goes to /reducers/index.js 
  //find the counter key in allReducers function, which gets it from /reducers/counter.js where the
  //state and counterReducer function reside, now depends on the action type being used
  let [buttonValue,setButtonValue]=useState("Login");
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment(5))} disabled={!isLogged} className='btn btn-success'>+</button>
      <button onClick={()=> dispatch(decrement())} disabled={!isLogged} className='btn btn-success'>-</button>
      <div>
        <input type="button" onClick={()=> {
          dispatch(handleLoggin())
          isLogged ?setButtonValue("Login"):setButtonValue("Logout")
        }} value={buttonValue} className='btn btn-primary'/> 
      </div>
      {isLogged ? <div><h1>Only show when loggin is true</h1></div> : ''}
    </div>
  );
}
export default App;