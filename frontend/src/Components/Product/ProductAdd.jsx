import React, { useState } from 'react';
// import { FaLock, FaUser } from "react-icons/fa";
import axios from 'axios';
import "../../CSS/ProductAdd.css";
import cart from "../../Images/cart.jpg";


function ProductAdd() {
    const [formData, setFormData] = useState({
        productName:'',
        description:'',
        detail:'',
        price:'',
        address:''
    });
    
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
           
            const response = await axios.post("http://localhost:8000/add/products", formData);
            console.log("Product added successfully:", response.data);

            setFormData({
                productName: '',
                description: '',
                detail: '',
                price: '',
                address: ''
            });

           
            alert("Product added successfully!");
        } catch (error) {
            console.error("Error adding product:",error.response ? error.response.data : error.message );
            alert("Error adding product, please try again.");
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
                            <input type="product name" name="productName"  value={formData.productName} placeholder="Product Name" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Description:</b></label>
                            <input type="description" name="description"  value={formData.description} placeholder="Description" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Detail:</b></label>
                            <input type="detail" name="detail"   value={formData.detail}placeholder="Detail"  className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Price:</b></label>
                            <input type="price" name="price"  value={formData.price} placeholder="Price" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <label className="label_ProductAdd"><b>Address:</b></label>
                            <input type="address" name="address"  value={formData.address} placeholder="Address" className='input_ProductAdd' onChange={handleChange} required />
                        </div>
                        <div className="form-group_ProductAdd">
                            <button className='Button_ProductAdd' type="submit">Submit</button>
                        </div>



                    </form>
                </div>
            </div>
        </>
    );

}

export default ProductAdd;