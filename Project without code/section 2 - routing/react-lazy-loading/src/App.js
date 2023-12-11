import * as React from 'react';
import { Routes, Route, Link, useNavigation } from 'react-router-dom';

import Home from './Home';
//import Dashboard from './Dashboard'; // <-- Terrible! Dashboard is loaded immediately when app loads

import NotFound from './NotFound';
import Product from './Product';
import GlobalSpinner from './GlobalSpinner';

const Dashboard = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
    () =>
        Math.floor(Math.random() * 10) >= 4
        ? import("./Dashboard")
        : Promise.reject(new Error())
  );
});

const App = () => {
  const navigation = useNavigation();
  return (
    <>
      <h1>React Router</h1>
     
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/product">Product</Link> |
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product/>}/>
        <Route path="/dashboard" element={<Dashboard />}  />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      </React.Suspense>
    </>
  );
};

export default App;