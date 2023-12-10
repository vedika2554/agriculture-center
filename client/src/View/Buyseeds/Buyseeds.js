import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Buyseeds.css";
import Navbar from "./../../Component/Nvabar/Navbar";
export default function Buy(){
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [seed,setSeed] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [shippingAddress,setShippingAddress] = useState('');

    const loadSeed = async()=>{

        if(!id){
            window.location.href = "/";
        }

         const response = await axios.get(`/seeds/${id}`)
     

        setSeed(response.data.data);
    };



    const increase = async()=>{
        setQuantity(quantity+1);
    }

    const decrease =async()=>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }
    useEffect(()=>{
        loadSeed();
    },[]);


    const placeorder =async()=>{
        const response = await axios.post("/seedorder",{
            seed:seed,
            user:user._id,
            quantity:quantity,
            shippingAddress:shippingAddress,
        })

        alert(response.data.message);
        window.location.href = "/orders"
    }
    return(
        <>
        <Navbar/>
        <div className="seedbuy-container">
            <img src={seed.image} alt={seed.name} className="seedbuy-product-img"/>
            <div>
                <h1>Name : {seed.name}</h1>
                <p>Description : {seed.description}</p>
                <h1>Price : ₹ {seed.price}</h1>

            <div className="seedqt-container">
            <span className="seedquantity-text">Quantity : </span>
                <span className="seedquantity-btn" onClick={decrease}>-</span>
                <span className="seedquantity-text">{quantity} </span>
                <span className="seedquantity-btn" onClick={increase}>+</span>
            </div>
            <h1>Photo : </h1>
            <div className="seedphotocontainer">
            <img src={seed.image1} className="seedphoto"/> 
            <img src={seed.image2} className="seedphoto"/> 
            <img src={seed.image3} className="seedphoto"/> 
            </div>
            <h1>Address : </h1>
            <input type="text"
                placeholder="shippingAddress"
                className="seedshippingAddress"
                value={shippingAddress}
                onChange={(e)=>{
                    setShippingAddress(e.target.value);
                }}
                />

                <button className="seedBuy-btn" type="button" onClick={placeorder}>PlaceOrder</button>
            </div>
        </div>
      </>
    )
}
