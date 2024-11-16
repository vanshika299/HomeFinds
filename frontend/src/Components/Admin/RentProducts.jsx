import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../CSS/Page.css";
import Sidebar from './Sidebar';

const RentProducts = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/rent/rentProduct");
        setProducts(response.data.products);
       
        
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
    <h1 className='heading_Para'>Rent Products</h1>
    <table className="table_Page">
      <thead>
        <tr className='table_tr_Page' >
          
          <th className="table_th_Page">Name</th>
          <th className="table_th_Page">Price</th>
          <th className="table_th_Page">Delete Rent Product</th>
        </tr>
      </thead>
      <tbody>
        {products.map(products => (
          <tr className='table_tr_Page' key={products._id}>
            
            <td className="table_td_Page">{products.productName}</td>
            <td className="table_td_Page">{products.price}</td>
            <button className="del_Page ">Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default RentProducts;
