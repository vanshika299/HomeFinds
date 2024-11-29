import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Buy&RentPage&Donate.css";
import noImage from "../Images/noImage.jpeg";


export default function BuyPage() {
    const[cards,setCards]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    
    useEffect(() => {
        
        async function fetchData() {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:8000/buy/buyProduct");
                console.log("Fetched Data:", response.data.products); 
              
                setCards(response.data.products || []); // Ensure cards is always an array
                setError(null); // Clear any previous errors
               
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); // Stop loading
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="search_BuyRent">
                        <input className="search_input_BuyRent" type="text" name="" placeholder="Search products here..." />
                        <a href="#" className="search_icon"><i className="fa fa-search"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-grid_BuyRent">
                {cards.map((card) => (
                    <div className="card-style_BuyRent" key={card._id}>
                        <img src={noImage} class="image-style_BuyRent" alt={card.image} />
                        <div class="card-content_BuyRent">
                            <h2>{card.productName}</h2>
                            <p>{card.description}</p>
                            <p>{card.price}</p>
                        </div>
                        <div class="card-bottom_BuyRent">
                           <Link to={`/BuyNow/${card._id}`}> <button className="btn" style={{ backgroundColor: "rgb(223, 177, 93)" }}>BUY NOW</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}