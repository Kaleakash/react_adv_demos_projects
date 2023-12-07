import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import Customer from './Customer';
import Products from './Products';
import NotFound from './NofFound';
import Product from './Product';
import Order from './Order';

function App() {

  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/home' element={<Home/>}>

        <Route path='customer' element={<Customer/>}></Route>
        <Route path='products' element={<Products/>}>
            <Route path='product/:pid' element={<Product/>}></Route>
        </Route>
        <Route path='order' element={<Order/>}></Route>

      </Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
