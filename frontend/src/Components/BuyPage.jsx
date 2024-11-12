import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Buy&RentPage&Donate.css";
import noImage from "../Images/noImage.jpeg";


export default function BuyPage() {
    const[cards,setCards]=useState([]);
  
    
    useEffect(() => {
        
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:8000/buy/buyProduct");
                console.log("Fetched Data:", response.data.products); 
                setCards(response.data.products);
                
               
            } catch (error) {
                console.error("Error fetching products:", error);
            } 
        }
        fetchData();
    }, []);

    return (
        <>
            <div class="container h-100">
                <div class="d-flex justify-content-center h-100">
                    <div class="search_BuyRent">
                        <input class="search_input_BuyRent" type="text" name="" placeholder="Search products here..." />
                        <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
                    </div>
                </div>
            </div>
            <div class="card-grid_BuyRent">
                {cards.map((card) => (
                    <div class="card-style_BuyRent" key={card._id}>
                        <img src={noImage} class="image-style_BuyRent" alt={card.image} />
                        <div class="card-content_BuyRent">
                            <h2>{card.productName}</h2>
                            <p>{card.description}</p>
                            <p>{card.price}</p>
                        </div>
                        <div class="card-bottom_BuyRent">
                           <Link to="/BuyNow"> <button class="btn" style={{ backgroundColor: "rgb(223, 177, 93)" }}>BUY NOW</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}