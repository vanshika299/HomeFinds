
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../../CSS/UserProfile.css';
import user from '../../Images/user.jpg';


const UserProfile = () => {
    const {id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [users, setUsers] = useState({});
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
      

    useEffect(() => {
        if (!token) {
            alert('Please login to view your profile');
            navigate('/login');
            return;
        }

        const getUser = async () => {
            try {
                console.log('Token:', token);
                const response = await axios.get(
                    'http://localhost:8000/api/userprofile',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log('API Response:', response.data);
                setUsers(response.data.user || {});
                setCards(response.data.user?.products || []);
            } catch (err) {
                console.error(
                    'Error fetching user data:',
                    err.response?.data || err.message
                );
            }
        };
        getUser();
    }, [token, navigate]);

    const handleUpdateProduct = (id) => {
        navigate(`/updateProduct/${id}`);
    }
    const handleDelete = async () => {
        try {
          setLoading(true);
          setError("");
           const response = await axios.delete('http://localhost:8000/delete/delete-users',{
            headers: {
                Authorization: `Bearer ${token}`,
              },
            });
          if (response.status === 200) {
          alert(response.data.message); 
          navigate("/signup"); 
        }
        } catch (err) {
          
          setError(err.response?.data?.message || "An error occurred");
        } finally {
          setLoading(false);
        }
      };
      const handleDel = async (productId) => {
        try {
          setLoading(true);
          setError("");
           const response = await axios.delete(`http://localhost:8000/delete/deleteProducts/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
              },
            });
          if (response.status === 200) {
          alert(response.data.message); 
          setCards(cards.filter((product) => product._id !== productId));
        }
        } catch (err) {
          
          setError(err.response?.data?.message || "An error occurred");
        } finally {
          setLoading(false);
        }
      };

    return (
        <div className="body_UserProfile">
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-xl-12 col-md-0">
                            <div className="card user-card-full user-page">
                                <div className="row m-l-0 m-r-0">
                                    <div className="bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white d-flex mt-2">
                                            <div>
                                                <img
                                                    src={user}
                                                    className="img-radius"
                                                    alt="User-Profile-Image"
                                                />
                                            </div>
                                            <div className="yoho">
                                                <h6 className="f-w-600 name">
                                                    {users.name}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-4">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-900">
                                                <b>Information</b>
                                            </h6>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="m-b-10 f-w-600">
                                                        Username
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        {users.username}
                                                    </h6>
                                                </div>
                                                <div className="col-sm-3">
                                                    <p className="m-b-10 f-w-600">
                                                        Email
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        {users.email}
                                                    </h6>
                                                </div>
                                                <div className="col-sm-3">
                                                    <p className="m-b-10 f-w-600">
                                                        Phone
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        {users.contact}
                                                    </h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-900">
                                                <b>Location</b>
                                            </h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">
                                                        Address
                                                    </p>
                                                    <h6 className="text-muted f-w-400">
                                                        {users.address}
                                                    </h6>
                                                </div>
                                                <div className="col-sm-4">
                                                   <Link to="/updateUser"> <button
                                                        type="button"
                                                        className="btn_UserProfile"
                                                        style={{
                                                            backgroundColor:
                                                                'rgb(223, 177, 93)',
                                                        }}
                                                    >
                                                        
                                                        <b>Edit</b>
                                                    </button></Link>
                                                    <button
                                                        type="button"
                                                        className="btn_UserProfile"
                                                        style={{
                                                            backgroundColor:
                                                                'rgb(223, 177, 93)',
                                                        }} onClick={handleDelete}
                                                    >
                                                        <b>Delete</b>
                                                    </button>
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

            {/* Render Products */}
            <div className="product-list">
                {cards.length > 0 ? (
                    cards.map((product) => (
                        <div
                            className="card-style_UserProfile"
                            key={product._id}
                        >
                            <div className="card-content_UserProfile">
                            <h2>{product.productName}</h2>
                                <p><b>{product.description}</b></p>
                                <p>Price: ₹{product.price}</p>
                                
                                <div className="container_User">
                               
                               <Link to={`/UpdateProduct/${id}`}><button
                                                        type="button"
                                                        className="button_User me-2"
                                                        style={{
                                                            backgroundColor:
                                                                'white',
                                                        }} onClick={()=>handleUpdateProduct(product._id)}
                                                    > 
                                                        <b>Edit</b>
                                                    </button></Link> 
                                                   
                                <button
                                                        type="button"
                                                        className="button2_User"
                                                        style={{
                                                            backgroundColor:
                                                                'white',
                                                        }} onClick={()=>handleDel(product._id)}
                                                    > 
                                                        <b>Delete</b>
                                                    </button>
                                                    </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
