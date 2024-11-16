import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../../CSS/Page.css";
import Sidebar from './Sidebar';

const Page=()=>{

    const token=localStorage.getItem("token");
    const [users,setUsers]=useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
               const response =await fetch("http://localhost:8000/api/users",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
               });
               const result=await  response.json();
               console.log("API response:", result);
               setUsers(result);
               
            }catch(error){
                console.error("Error fetching users:", error);
                console.log(error);
            }
        };
        if(token){
            fetchUsers();
            
           }
           else{
            navigate("/login")
           }
    },[token,navigate]);
    
    return (
     
    <div >
    <div>
        <Sidebar />
    </div>
    <div className="box_Page">
    <h2 className="heading_Para"><b><u>User List</u> </b></h2>
    {users && users.length > 0 ? (
        <table className="table_Page">
            <thead>
                <tr className="table_tr_Page">
                    <th className="table_th_Page">Name</th>
                    <th className="table_th_Page">Email</th>
                    <th className="table_th_Page">Delete your user</th>
                    
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr className='table_tr_Page' key={user.id}>
                        <td className="table_td_Page">{user.name}</td>
                        <td className="table_td_Page">{user.email}</td>
                        <button className="del_Page" >Delete</button>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <p className="para_Page"> No users found.</p>
    )}
    </div>
    
</div>);

}
export default Page;