import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../CSS/Page.css";
import Sidebar from './Sidebar';

const BuyProducts = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/buy/buyProduct");
        setProducts(response.data.product);
       
        
      } catch (err) {
    console.error('Failed to fetch products');
    
      }
    };

    fetchProducts();
  }, []);

  

  return (
    
    <div>
        <div>
        <Sidebar />
    </div>
    <h1>Buy Products</h1>
    <table className="table_Page">
      <thead>
        <tr className='table_tr_Page' >
          
          <th className="table_th_Page">Name</th>
          <th className="table_th_Page">Price</th>
          <th className="table_th_Page">Delete Buy Product</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr className='table_tr_Page' key={product._id}>
            
            <td className="table_td_Page">{product.productName}</td>
            <td className="table_td_Page">{product.price}</td>
            <button className="del_Page ">Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default BuyProducts;
