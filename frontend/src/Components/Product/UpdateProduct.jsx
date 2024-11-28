import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "../../CSS/ProductAdd.css";
import cart from "../../Images/cart.jpg";



function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
   
    const [formData, setFormData] = useState({
        productName:'',
        description:'',
        productFor:'',
        price:'',
        address:'',
        selectCategory:'',
        customer:'',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
   
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:8000/fetch/getProduct/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("Fetched product data:", response.data);
                
                setFormData({
                    productName: response.data.productName || '',
                    description: response.data.description || '',
                    productFor: response.data.productFor || '',
                    price: response.data.price || '',
                    address: response.data.address || '',
                    selectCategory: response.data.selectCategory || '',
                    customer: response.data.customer || '',
                });
            } catch (err) {
                console.error("Error fetching product details:", err.response?.data || err.message);
                setError("Unable to fetch product details. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        if (id) {
        fetchProduct();
        }
    }, [id]);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await axios.put(
                `http://localhost:8000/update/updateProducts/${id}`, 
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Product updated successfully:", response.data);
            alert("Product updated successfully!");
            navigate('/UserProfile'); 
        } catch (error) {
            console.error("Error updating product:", error.response?.data || error.message);
            alert("Error updating product, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='login-bg_Product_Add'>
                <div >
                    <img src={cart} style={{ width: "500px", height: "500px ", marginLeft: "7rem", marginBottom: "10rem" }} ></img>
                </div>
                <div className="login-container_ProductAdd">
                    <form onSubmit={handleSubmit}>
                        <h4 className="my-4"><b>You can add your product here...</b></h4>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Product name:</b></label>
                            <input type="text" name="productName" value={formData.productName}  placeholder="Product Name" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Description:</b></label>
                            <input type="text" name="description" value={formData.description}  placeholder="Description" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Product For:</b></label>
                            <select name="productFor" placeholder="Product For" value={formData.productFor} className='input_ProductAdd_dropdown' onChange={handleChange} required >
                            <option value="">Select Product For</option>
                            
                            <option value="Donate">Donate</option>
                            <option value="Rent">Rent</option>
                            <option value="Buy">Buy</option>
                            </select>
                         
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Price:</b></label>
                            <input type="number" name="price" value={formData.price}  placeholder="Price" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Address:</b></label>
                            <input type="text" name="address" value={formData.address} placeholder="Address" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div>
                        <label className="label_ProductAdd"><b>Select Category:</b></label>
                        
                        <select name="selectCategory" placeholder="Select Category" value={formData.selectCategory}   className='input_ProductAdd_dropdown' onChange={handleChange} required >
                            <option value="">Select a category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">clothing</option>
                            <option value="Automobile">Automobile</option>
                            <option value="Cooking">Cooking</option>
                            </select>
                        
                     
                        </div>
                        <div className="form-group_ProductAdd ">
                            <button className='Button_ProductAdd' type="submit">Update Product</button>
                           
                        </div>



                    </form>
                </div>
            </div>
        </>
    );

}

export default UpdateProduct;