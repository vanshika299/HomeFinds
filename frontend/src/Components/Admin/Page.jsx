import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
        <div>
            <h2>User List</h2>
            <ul>
                {users && users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </ul>
        </div>
    );
    
}
export default Page;