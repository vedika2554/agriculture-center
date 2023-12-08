import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Buyfruit.css";

export default function Buy(){
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [fruit,setFruit] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [shippingAddress,setShippingAddress] = useState('');

    const loadFruit = async()=>{

        if(!id){
            window.location.href = "/";
        }

         const response = await axios.get(`/fruits/${id}`)
     

        setFruit(response.data.data);
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
        loadFruit();
    },[]);


    const placeorder =async()=>{
        const response = await axios.post("/fruitorder",{
            fruit:fruit,
            user:user._id,
            quantity:quantity,
            shippingAddress:shippingAddress,
        })

        alert(response.data.message);
        window.location.href = "/orders"
    }
    return(
        <div className="buy-container">
            <img src={fruit.image} alt={fruit.name} className="buy-product-img"/>
            <div>
                <h1>{fruit.name}</h1>
                <p>{fruit.description}</p>
                <h1>{fruit.price}</h1>

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
