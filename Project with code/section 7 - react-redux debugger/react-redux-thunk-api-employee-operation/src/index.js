import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';

import { legacy_createStore as createStore,combineReducers,applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux'
import {thunk} from "redux-thunk"
import employeeReducer from './reducers/EmployeeReducers';

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const allReducer = combineReducers({
    employee:employeeReducer
})
const store = createStore(allReducer,enhancer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
