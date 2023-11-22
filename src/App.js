// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import { Link } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import State from './state/State';
import StateRemove from './state/StateRemove';
import StateObjectArray from './state/StateObjectArray';
import ProductApi from './pages/ProductApi';
import ProductDetailsApi from './pages/ProductDetailsApi';

function App() {
  
 
  return (<>
    <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/productApi'>ProductApi</Link></li>

    </ul>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />}></Route>
      <Route path = "/productApi" element = {<ProductApi />}></Route>
      <Route path='/productDetailsApi/:id' element={<ProductDetailsApi />}></Route>


    </Routes>

  </>
  );
}

export default App;
