import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Buyvegetable.css";
import Navbar from "./../../Component/Nvabar/Navbar";
import Footer  from '../../Component/Footers/footer';
import{ checkLogin } from "./../../utils/auth"
export default function Buy(){
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [vegitable,setVegitable] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [shippingAddress,setShippingAddress] = useState('');

    const loadVegitable = async()=>{

        if(!id){
            window.location.href = "/";
        }

         const response = await axios.get(`/vegitable/${id}`)
     

        setVegitable(response.data.data);
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
        loadVegitable();
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
    },[]);


    const placeorder =async()=>{
        const response = await axios.post("/vegetableorder",{
            vegitable:vegitable,
            user:user._id,
            quantity:quantity,
            shippingAddress:shippingAddress,
        })

        alert(response.data.message);
        window.location.href = "/vegetableorder"
    }
    return(
        <>
        <Navbar/>
        <div className="vegetablebuy-container">
            <img src={vegitable.image} alt={vegitable.name} className="vegetablebuy-product-img"/>
            <div>
                <h1>Name : {vegitable.name}</h1>
                <p>Description : {vegitable.description}</p>
                <h1>Price : ₹ {vegitable.price}</h1>
                
            <div className="vegetableqt-container">
            <span className="vegetablequantity-text">Quantity : </span>
                <span className="vegetablequantity-btn" onClick={decrease}>-</span>
                <span className="vegetablequantity-text">{quantity} </span>
                <span className="vegetablequantity-btn" onClick={increase}>+</span>
            </div>
            <h1>Photo : </h1>
            <div className="vegetablephotocontainer">
            <img src={vegitable.image1} className="vegetablephoto"/> 
            <img src={vegitable.image2} className="vegetablephoto"/> 
            <img src={vegitable.image3} className="vegetablephoto"/> 
            </div>
            <h1>Address : </h1>
            <input type="text"
            
                placeholder="shippingAddress"
                className="vegetableshippingAddress"
                value={shippingAddress}
                onChange={(e)=>{
                    setShippingAddress(e.target.value);
                }}
                />

                <button className="vegetableBuy-btn" type="button" onClick={placeorder}>PlaceOrder</button>
            </div>
        </div>
      <Footer/>
      </>
 )
}
