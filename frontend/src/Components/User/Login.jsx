import axios from 'axios';
import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "../../CSS/Login.css";

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const navigate=useNavigate();


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
         setError(''); 

       
        if (!formData.username || !formData.password) {
            setError('Please fill in both fields');
            setLoading(false);
            return;
        }

        try {
            
            const response = await axios.post('http://localhost:8000/auth/login', formData); 
            console.log('Response:', response);
            if (response.data.token) {
               
                localStorage.setItem('token', response.data.token); 
                console.log('Login successful');
                navigate('/');
        
              
            
            } else {
                setError(response.data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
      
            setError(err.response?.data?.message || 'Error logging in. Please try again later.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className='login-bg_Login'>
            <div className="login-container_Login " >
                <form onSubmit={handleSubmit}>
                    <h2 className="mb-4">WELCOME!</h2>
                    {error && <p className="error-message">{error}</p>} 
                    <div className="form-group">
                        <label className="label_Login">
                            <FaUser className="icon_Login" /><b>Username</b>
                        </label>
                        <input
                            className='input_Login'
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={handleChange}
                            required
                            value={formData.username}
                        />
                    </div>
                    <div className="form-group">
                        <label className="label_Login">
                            <FaLock className="icon_Login" /><b>Password</b>
                        </label>
                        <input
                            className='input_Login'
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleChange}
                            required
                            value={formData.password}
                        />
                    </div>
                    <div className="box">
                        <label className="label_Login">
                            <input type="checkbox" style={{ margin: "0 .4rem 0 0" }} />
                            <b>Remember me</b>
                        </label>
                    </div>
                    <div className="form-group">
                        <button className='button_Login' type="submit" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                    <h4 className="fs-6 text-dark"><b>Don't have an account?</b><Link to="/Signup"><u>SignUp</u></Link></h4>
                </form>
            </div>
        </div>
    );
}

export default Login;
