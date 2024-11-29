import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../CSS/BuyNow.css';
import profile from '../Images/profile.jpg';
import radio from '../Images/radio-removebg-preview.png';

function BuyNow() {
  const { id } = useParams(); // Get product ID from the URL
    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      async function fetchProduct() {
          try {
              setLoading(true);
              const response = await axios.get(`http://localhost:8000/fetch/getProduct/${id}`);
              console.log("Fetched Product Details:", response.data);
              setProduct(response.data); // Assume your API returns the product object directly
              
          } catch (err) {
              console.error("Error fetching product details:", err);
              setError("Failed to fetch product details. Please try again later.");
          } finally {
              setLoading(false);
          }
      }
      fetchProduct();
  }, [id]);
  if (!product) {
    return <div>No product details found.</div>;
}

  return (
    <div className='background_BuyNOw'>
      <div className="d-flex ">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img
                src={radio}
                alt="radio"
                className="img_BuyNow"
                style={{ margin: "1.2rem 0px 0px 6rem " }}

              ></img>
            </div>
            <div>
              <h2 className="text-dark" style={{marginLeft: "3rem"}}><b><u>Radio</u></b></h2>
            </div>
            <div className="data_BuyNow">
              <h6><b>{product.productName}</b></h6>
              
              
              <p><b>Category</b> {product.selectCategory}</p>
              
            </div>

            <div className="Des_BuyNow fs-7 text-dark ">
              <p><b>{product.description}</b></p>
            </div>
          </div>
        </div>
        <div className="Detail_BuyNow">


          <div className="price_BuyNow">
            <h5 className="text-danger fs-4"><b>{product.price}</b></h5>
            
          </div>
          <hr />

          <div className="seller_BuyNow d-flex">
            <img src={profile} className="image_BuyNow" alt="profile" ></img>
            <div className="heading_BuyNow">
              <h3>{product.customer?.username}</h3>
              <p>{product.customer?.address}</p>
            </div>
          </div>



          <button className="button_BuyNow"><b>BuyNow</b></button>

        </div>
      </div>



    </div>

  )


}



export default BuyNow;

