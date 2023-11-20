import React, { useState } from 'react';
import { productsdata } from '../data/products';

const ProductTable = () => {
  const [products, setProducts] = useState(productsdata);

  const showinstock = () => {
    setProducts(productsdata.filter((item) => item.unitsInStock < 5));
  };
  const showall = () => {
    setProducts(productsdata);
  }
  const cheapProduct = () => {
    setProducts(productsdata.filter((item) => item.unitPrice < 100));
  }
  const expensiveProduct = () => {
    setProducts(productsdata.filter((item) => item.unitPrice > 1000));
  }
  const noStock = () => {
    setProducts(productsdata.filter((item) => item.unitsInStock === 0));
  }

  return (
    <>
      <button onClick={showinstock}>Show Critic Stock</button>
      <button onClick={showall}>Show All</button>
      <button onClick={cheapProduct}>Cheap</button>
      <button onClick={expensiveProduct}>Expensive</button>
      <button onClick={noStock}>No Stock</button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UnitPrice</th>
            <th>UnitsInStock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>{item.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
