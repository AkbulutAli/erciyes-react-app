import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductApi() {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products")
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

  return (<>
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
                    <td> <Link to={`/productDetailsApi/${item.id}`}>{item.name}</Link></td>
                    <td>{item.unitPrice}</td>
                    <td>{item.unitsInStock}</td>
                    <td><button onClick={() => setProducts(products.filter((p) => p.id !== item.id))}>Delete</button></td>
                </tr>
            ))}
        </tbody>

    </table>
  </>
   
  )
}

export default ProductApi