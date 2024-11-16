import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/AdminLogin.css';

export default function AdminLogin() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const adminCredentials = {
        username: "admin",
        password: "123",
      };
  
      if (
        formData.username === adminCredentials.username &&
        formData.password === adminCredentials.password
      ) {
        alert("Welcome back, Admin!");
        
        navigate("/AdminDashboard"); 
      } else {
        alert("Invalid username or password. Please try again.");
      }
    };
    
  
    return (
        <div className='yo_AdminLogin'>
            <div class="main_AdminLogin">
                <h1 className='h1_AdminLogin'>Admin Login</h1>
                <h3>Enter your login credentials</h3>
                <form onSubmit={handleSubmit}>
                    <label className='label_AdminLogin' for="username">
                        Username:
                    </label>
                    <input className='input_AdminLogin' type="text"
                       
                        name="username"
                        placeholder="Enter your Username"  onChange={handleChange} required />

                    <label className='label_AdminLogin' for="password">
                        Password:
                    </label>
                    <input className='input_AdminLogin' type="password"
                      
                        name="password"
                        placeholder="Enter your Password"   onChange={handleChange} required />

                    <div class="wrap_AdminLogin">
                        <button className='button_AdminLogin' type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}