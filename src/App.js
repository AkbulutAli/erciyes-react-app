// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import { Link } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import State from './state/State';


function App() {
  
  return <State></State>
  return (<>
    <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
    </ul>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />}></Route>
    </Routes>

  </>
  );
}

export default App;
