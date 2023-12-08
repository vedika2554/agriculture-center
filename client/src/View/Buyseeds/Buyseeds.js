import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Buyseeds.css";

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
        <div className="buy-container">
            <img src={seed.image} alt={seed.name} className="buy-product-img"/>
            <div>
                <h1>{seed.name}</h1>
                <p>{seed.description}</p>
                <h1>{seed.price}</h1>

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
