import axios from 'axios'; // Import axios for API requests
import React, { useEffect, useState } from 'react';

import { FaUser } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import "../../CSS/Signup.css";
import bg from "../../Images/bg.avif";


function UpdateUser() {
    const token=localStorage.getItem('token');
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        contact: '',
        
        address:''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();
const validateFormData = (formData) => {
    const { username, name, email, contact, password } = formData;

    if (!username || !name || !email || !contact || !password) {
        return 'All fields are required';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        return 'Please enter a valid email';
    }
    if (contact.length < 10) {
        return 'Contact number should be at least 10 digits';
    }
    if (password.length < 6) {
        return 'Password should be at least 6 characters';
    }

     
   

return '';
};
const handleChange = (e) => {
    setFormData({
       ...formData,
        [e.target.name]: e.target.value,
    });
 };

useEffect(() => {
    if (!token) {
        alert('Please login to view your profile');
       
        return;
    }

    const getUser = async () => {
        try {
            console.log('Token:', token);
            const response = await axios.get(
                "http://localhost:8000/api/userprofile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('API Response:', response.data);
            //setUsers(response.data.user || {});
            //setCards(response.data.user?.products || []);
            const user=response.data.user;
            setFormData({
                name: user.name,
                username: user.username,
                // password:user.password,
                email: user.email,
                contact: user.contact,
                address: user.address,
                
            });
        } catch (err) {
            console.error(
                'Error fetching user data:',
                err.response?.data || err.message
            );
        }
    };
    getUser();
}, [token, navigate]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/update/update-users', {
            name: formData.name,
            username: formData.username,
            email: formData.email,
            contact: formData.contact,
            address: formData.address,
            
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data);
        alert('User Profile Updated successfully Successful on our website');
        navigate('/Userprofile');
    } catch (err) {
        console.log(err);
        alert('Updating Failed');
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

                        {/* <div className="form-group_Signup">
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
                        </div> */}

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
                        <div className="form-group_Signup">
                            <label className="label_Signup"><MdEmail className="icon_Signup" /><b>Address:</b></label>
                            <input
                                className="input_Signup"
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group_Signup mt-2">
                            <button className="button_Signup" type="submit">Edit</button>
                        </div>
                      
                        
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateUser;
