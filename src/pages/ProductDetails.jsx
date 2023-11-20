import React from 'react'
import { useParams } from 'react-router-dom'
import { productsdata } from '../data/products'

function ProductDetails() {
    const { id } = useParams()
    var product = productsdata.find(x => x.id == id)
  return (<>
  <h1>Details</h1>
  <h2>Product Name: {product.name}</h2>
  <h2>Unit Price: {product.unitPrice}</h2>
  <h2>Units In Stock: {product.unitsInStock}</h2>
  <h2>Category Name:{product.category.name}</h2>
  <h2>Supplier Name: {product.supplier.companyName}</h2>
  </>
  )
}

export default ProductDetails