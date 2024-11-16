import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../CSS/Page.css";
import Sidebar from './Sidebar';

const DonateProducts = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/donate/donateProduct");
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
    <h1 className="heading_Para">Donate Products</h1>
    <table className="table_Page">
      <thead>
        <tr className='table_tr_Page' >
          
          <th className="table_th_Page">Name</th>
          <th className="table_th_Page">Price</th>
          <th className="table_th_Page">Delete Donate Product</th>
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

export default DonateProducts;
