import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCartPlus, FaUserPlus } from "react-icons/fa6";
import { IoMdGitPullRequest } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import '../../CSS/Dashboard.css';
import Sidebar from './Sidebar';

function Dashboard() {
    const [data, setData] = useState({
        buyCount: 0,
        rentCount: 0,
        donateCount: 0,
        userCount: 0,
      });
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");
    
      useEffect(() => {
        const fetchCounts = async () => {
          try {
            const response = await axios.get("http://localhost:8000/buyer/count");
            const { count, count1, count2, user } = response.data;
            setData({
              buyCount: count,
              rentCount: count1,
              donateCount: count2,
              userCount: user,
            });
            setLoading(false);
          } catch (err) {
            setError("Failed to fetch data. Please try again.");
            setLoading(false);
          }
        };
    
        fetchCounts();
      }, []);
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>{error}</p>;
      }
    return (
        <>
        <div>
            <Sidebar />
        </div>
            <div className="dash">
                <div className="product_dashboard ">
                    <h3 className='h3_dash'><MdProductionQuantityLimits className="icon_dash" /><b>Products for buy</b></h3>
                    <h3 className='h3_dash'><b>{data.buyCount}</b></h3>
                </div>
                <div className="product_dashboard ">
                    <h3 className='h3_dash'><FaCartPlus className="icon_dash" /><b>Products for donate</b></h3>
                    <h3 className='h3_dash'><b>{data.donateCount}</b></h3>
                </div>
                <div className="pro_dashboard">
                    <h3 className='h3_dash'><IoMdGitPullRequest className="icon_dash" /><b>No. of Users</b></h3>
                    <h3 className='h3_dash'><b>{data.userCount}</b></h3>
                </div>
                <div className="pro_dashboard">
                    <h3 className='h3_dash'><FaUserPlus className="icon_dash" /><b>Products for Rent</b></h3>
                    <h3 className='h3_dash'><b>{data.rentCount}</b></h3>
                </div>
            </div>
        </>
    )

}
export default Dashboard;
