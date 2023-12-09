import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Buy.css";

export default function Buy(){
    const {id} = useParams();
    //const [fruits,setFruits] = useState({});
    const [flowers,setFlowers] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [shippingAddress,setShippingAddress] = useState('');

    const loadProduct = async()=>{

        if(!id){
            window.location.href = "/";
        }
        const response = await axios.get(`/flowers/${id}`)

        setFlowers(response.data.data);
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
        loadProduct();
    },[]);


    const placeorder =async()=>{
        const response = await axios.post("/order",{
            flowers:flowers,
            user:user._id,
            quantity:quantity,
            shippingAddress:shippingAddress,
        })

        alert(response.data.message);
        window.location.href = "/orders"
    }
    return(
        <div className="buy-container">
            <img src={flowers.image} alt={flowers.name} className="buy-product-img"/>
            <div>
                <h1>{flowers.name}</h1>
                <p>{flowers.description}</p>
                <h1>{flowers.price}</h1>

            <div className="qt-container">
                <span className="quantity-btn" onClick={decrease}>-</span>
                <span className="quantity-text">{quantity} </span>
                <span className="quantity-btn" onClick={increase}>+</span>
            </div>

            <input type="text"
                placeholder="shippingAddress"
                className="shippingAddress"
                value={shippingAddress}
                onChange={(e)=>{
                    setShippingAddress(e.target.value);
                }}
                />

                <button className="Buy-btn" type="button" onClick={placeorder}>PlaceOrder</button>
            </div>
        </div>
    )
}