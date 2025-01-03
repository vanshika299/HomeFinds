import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../CSS/Navbar2.css'; // Import CSS for additional styling
import logo from '../../Images/logo.png';
import profile from '../../Images/profile.jpg';

function Navbar() {
    const token = localStorage.getItem('token'); 
    
    const navigate = useNavigate(); 
    const location = useLocation();
   
 
    const handleLogout = () => { 
        localStorage.removeItem('token'); 
       
        navigate('/'); 
        alert('Logged out successfully :('); 
    };
    const handleServicesClick = (e) => {
        e.preventDefault();
        
        
        if (location.pathname === '/') {
            document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
        } else {
            
            navigate('/?scroll=services');
         }
    };
    
    
    
    return ( 
        <nav className="navbar_Navbar2 ">    
            <div className="navbar-container_Navbar2">
                <div>
                    <ul className="nav-links_Navbar2">
                        <li><img src={logo} className="logo_Navbar2"></img></li>
                        <li>|</li>
                        <li><Link to="/"><b>Home</b></Link></li>
                        <li>|</li>
                        <li><Link to="/aboutus"><b>AboutUs</b></Link></li>
                        <li>|</li>
                        <li><Link to="#services-section"onClick={handleServicesClick}><b>Services</b></Link></li>
                        <li>|</li>
                        <li><Link to="/ContactUs"><b>Contact</b></Link></li>
                        <li>|</li>
                        <li><Link to="/productAdd"><b>AddProduct</b></Link></li>
                        <li>|</li>
                        <li><Link to="/AdminLogin"><b>Admin</b></Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="d-flex right_Navbar2">
                        {token?<li><Link><button className='login_Navbar2' onClick={handleLogout}><b>Logout</b></button></Link></li>:<> <li><Link to="/Login"><button className='login_Navbar2'><b>LogIn</b></button></Link></li>
                       
                        <li><Link to="/Signup"><button className="signup_Navbar2 login_Navbar2"><b>SignUp</b></button></Link></li>
                        </>
                        }
                        <li><Link to="/UserProfile"><img src={profile} className="image_Navbar2"></img></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
