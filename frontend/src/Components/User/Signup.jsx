import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import axios from 'axios'; // Import axios for API requests
import "../../CSS/Signup.css";
import bg from "../../Images/bg.avif";

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        contact: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, name, email, contact, password } = formData;

        // Simple form validation
        if (!username || !name || !email || !contact || !password) {
            setError('All fields are required');
            return;
        }

        try {
            // Make API request to backend for signup
            const response = await axios.post('http://localhost:8080/users/signup', formData); // Assuming your API route is /api/signup
            console.log(response);
            setSuccess(response.data.message); // Success message from backend
            setError(''); // Clear error message if any
        } catch (err) {
            setError(err.response ? err.response.data.message : "Server error");
            setSuccess(''); // Clear success message if any
        }
    };

    return (
        <>
            <div style={{
                justifyContent: "center",
                maxHeight: "100vh",
                padding: "30px 40px",
                backgroundImage: `url(${bg})`,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%"
            }}>
                <div className="login-container_Signup">

                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-4 fs-5"><b><u>Signup for new account</u></b></h2>

                        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                        {success && <p style={{ color: 'green' }}>{success}</p>} {/* Display success message */}

                        <div className="form-group">
                            <label className="label_Signup"><FaUser className="icon_Signup" /><b>UserName:</b></label>
                            <input
                                className="input_Signup"
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="label_Signup"><FaUser className="icon_Signup" /><b>Name:</b></label>
                            <input
                                className="input_Signup"
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group_Signup">
                            <label className="label_Signup"><FaLock className="icon_Signup" /><b>Password</b></label>
                            <input
                                className="input_Signup"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group_Signup">
                            <label className="label_Signup"><MdEmail className="icon_Signup" /><b>Email:</b></label>
                            <input
                                className="input_Signup"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group_Signup">
                            <label className="label_Signup"><IoMdContacts className="icon_Signup" /><b>Contact:</b></label>
                            <input
                                className="input_Signup"
                                type="text"
                                name="contact"
                                placeholder="Contact"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group_Signup mt-2">
                            <button className="button_Signup" type="submit">Signup</button>
                        </div>
                        <h4 className="fs-6"><b>Already have an account? Login</b></h4>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
