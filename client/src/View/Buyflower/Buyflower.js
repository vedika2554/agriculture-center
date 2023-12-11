import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Buyflower.css";
import Navbar from "./../../Component/Nvabar/Navbar";
import Footer  from '../../Component/Footers/footer';
import{ checkLogin } from "./../../utils/auth"
export default function Buy(){
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [flower,setFlower] = useState({});
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
        checkLogin();
        loadFlower();
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
    },[]);


    const placeorder =async()=>{

        const response = await axios.post("/flowerorder",{
            flower:flower,

            user:user._id,
            quantity:quantity,
            shippingAddress:shippingAddress,
        })

        alert(response.data.message);
        window.location.href = "/flowerorder"
    }
    return(
        <>
        <Navbar/>
        <div>
        <div className="flowersbuy-container">
            <img src={flower.image} alt={flower.name} className="flowerbuy-product-img"/>
            <div>
                <h1>Name : {flower.name}</h1>
                <p>Description : {flower.description}</p>
                <h1>Price : ₹ {flower.price}</h1>

            <div className="flowerqt-container">
            <span className="flowerquantity-text">Quantity : </span>
                <span className="flowerquantity-btn" onClick={decrease}>-</span>
                <span className="flowerquantity-text">{quantity} </span>
                <span className="flowerquantity-btn" onClick={increase}>+</span>
            </div>
            <h1>Photo : </h1>
            <div className="flowerphotocontainer">
            <img src={flower.image1} className="flowerphoto"/> 
            <img src={flower.image2} className="flowerphoto"/> 
            <img src={flower.image3} className="flowerphoto"/> 
            </div>
            <h1>Address : </h1>
            <input type="text"
                placeholder="shippingAddress"
                className="flowershippingAddress"
                value={shippingAddress}
                onChange={(e)=>{
                    setShippingAddress(e.target.value);
                }}
                />

                <button className="flowerBuy-btn" type="button" onClick={placeorder}>PlaceOrder</button>
            </div>
        </div>
      </div>
      <Footer/>
      </>
    )
}
