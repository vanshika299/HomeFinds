import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/UserProfile.css'; // Import your custom CSS file
import user from '../../Images/user.jpg';

const UserProfile = () => {
    const navigate=useNavigate();
    const token = localStorage.getItem('token');
    const [users, setUsers] = useState('');

    useEffect(() => {
        if (!token) {
            alert('Please login to view your profile');
            navigate('/login');
            return;
        }

        const getUser = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8000/api/user',
                    
                    {
                        headers: {
                            Authorization:`Bearer ${token}`
                        }
                    }
                );
                setUsers(response.data.user);
                
            } catch (err) {
                console.log('Error fetching user data:', err.response ? err.response.data : err.message);
             
            }
        }
        getUser();
    }, [token,navigate]);

    return (
        <div className="body_UserProfile">
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row container d-flex justify-content-center">
                    <div class="col-xl-12 col-md-0">
                        <div class="card user-card-full user-page">
                            <div class="row m-l-0 m-r-0">
                                <div class="bg-c-lite-green user-profile">
                                    <div class="card-block text-center text-white d-flex mt-2">
                                        <div>
                                            <img src={user} class="img-radius" alt="User-Profile-Image" />
                                        </div>
                                        <div className='yoho'>
                                            <h6 class="f-w-600 name">{users.name}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 mt-4">
                                    <div class="card-block">
                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-900"><b>Information</b></h6>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <p class="m-b-10 f-w-600">Username</p>
                                                <h6 class="text-muted f-w-400">{users.username}</h6>
                                            </div>
                                            <div class="col-sm-3">
                                                <p class="m-b-10 f-w-600">Email</p>
                                                <h6 class="text-muted f-w-400">{users.email}</h6>
                                            </div>
                                            <div class="col-sm-3">
                                                <p class="m-b-10 f-w-600">Phone</p>
                                                <h6 class="text-muted f-w-400">{users.contact}</h6>
                                            </div>
                                        </div>
                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-900"><b>Location</b></h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Address</p>
                                                <h6 class="text-muted f-w-400">college</h6>
                                            </div>
                                            {/* <div class="col-sm-2">
                                                <p class="m-b-10 f-w-600">Pincode</p>
                                                <h6 class="text-muted f-w-400">12333</h6>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UserProfile;