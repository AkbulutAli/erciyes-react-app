import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetailsApi() {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`)
            .then((res) => {
                setProductDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    if (!productDetails) {
        return <div>Loading...</div>;
    }

    return (
        <>
        
            <button onClick={() => window.history.back()}>GoBack</button>
            <h1>Details</h1>
            <h2>Product Name: {productDetails.name}</h2>
            <h2>Unit Price: {productDetails.unitPrice}</h2>
            <h2>Units In Stock: {productDetails.unitsInStock}</h2>
            <h2>Category Name: {productDetails.category?.name}</h2>
            <h2>Supplier Name: {productDetails.supplier?.companyName}</h2>

        </>
    );
}

export default ProductDetailsApi;