import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Buyflower.css";

export default function Buy(){
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [flowers,setFlower] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [shippingAddress,setShippingAddress] = useState('');

    const loadFlower = async()=>{

        if(!id){
            window.location.href = "/";
        }

         const response = await axios.get(`/flowers/${id}`)
     

        setFlower(response.data.data);
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
        loadFlower();
    },[]);


    const placeorder =async()=>{
        const response = await axios.post("/flowerorder",{
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
                <h3>{flowers.name}</h3>
                <p>{flowers.description}</p>
                <h4>{flowers.price}</h4>

            <div className="qt-container">
                <span className="quantity-btn" onClick={decrease}>-</span>
                <span className="quantity-text">{quantity} </span>
                <span className="quantity-btn" onClick={increase}>+</span>
            </div>
            <div className="flowerphotocontainer">
            <img src={flowers.image1} className="flowerphoto"/> 
            <img src={flowers.image2} className="flowerphoto"/> 
            <img src={flowers.image3} className="flowerphoto"/> 
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
