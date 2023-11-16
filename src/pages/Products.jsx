import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Products() {
  return (
    <>
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
              <td><Link to={`/products/${item.id}`}>{item.id}</Link></td>
              <td><Link to={`/products/${item.id}`}>{item.name}</Link></td>
              <td><Link to={`/products/${item.id}`}>{item.unitPrice}</Link></td>
              <td><Link to={`/products/${item.id}`}>{item.unitsInStock}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Products;
