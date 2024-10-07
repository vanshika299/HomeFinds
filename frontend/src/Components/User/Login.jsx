import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import "../../CSS/Login.css";
import axios from 'axios'; // Axios to make API requests

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // For loading state
    const [success, setSuccess] = useState(false); // Success state

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading when form is submitted
        setError(''); // Clear any previous error message

        // Validate input fields
        if (!formData.username || !formData.password) {
            setError('Please fill in both fields');
            setLoading(false);
            return;
        }

        try {
            // Send the formData to the backend API
            const response = await axios.post('http://localhost:8080/users/login', formData); // Update this URL to your actual API endpoint

            // Handle success response
            if (response.data.success) {
                setSuccess(true); // Set success state to true
                // You can redirect or store the token here
                console.log('Login successful', response.data);
                // For example, storing the token in local storage:
                localStorage.setItem('token', response.data.token);
                // You can redirect to a dashboard or home page:
                window.location.href = '/dashboard';
            } else {
                setError(response.data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            // Handle error from API
            setError(err.response?.data?.message || 'Error logging in. Please try again later.');
        } finally {
            setLoading(false); // Stop loading after API response
        }
    };

    return (
        <div className='login-bg_Login'>
            <div className="login-container_Login " >
                <form onSubmit={handleSubmit}>
                    <h2 className="mb-4">WELCOME!</h2>
                    {error && <p className="error-message">{error}</p>} {/* Display error if any */}
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
                    <h4 className="fs-6"><b>Don't have an account? SignUp</b></h4>
                </form>
            </div>
        </div>
    );
}

export default Login;
