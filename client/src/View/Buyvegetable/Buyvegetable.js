import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Buyvegetable.css";
import Navbar from "./../../Component/Nvabar/Navbar";
import Footer  from '../../Component/Footers/footer';
export default function Buy(){
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [vegetable,setVegetable] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [shippingAddress,setShippingAddress] = useState('');

    const loadVegetable = async()=>{

        if(!id){
            window.location.href = "/";
        }

         const response = await axios.get(`/vegitable/${id}`)
     

        setVegetable(response.data.data);
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
        loadVegetable();
    },[]);


    const placeorder =async()=>{
        const response = await axios.post("/vegetableorder",{
            vegetable:vegetable,
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
        <div className="vegetablebuy-container">
            <img src={vegetable.image} alt={vegetable.name} className="vegetablebuy-product-img"/>
            <div>
                <h1>Name : {vegetable.name}</h1>
                <p>Description : {vegetable.description}</p>
                <h1>Price : ₹ {vegetable.price}</h1>

            <div className="vegetableqt-container">
            <span className="vegetablequantity-text">Quantity : </span>
                <span className="vegetablequantity-btn" onClick={decrease}>-</span>
                <span className="vegetablequantity-text">{quantity} </span>
                <span className="vegetablequantity-btn" onClick={increase}>+</span>
            </div>
            <h1>Photo : </h1>
            <div className="vegetablephotocontainer">
            <img src={vegetable.image1} className="vegetablephoto"/> 
            <img src={vegetable.image2} className="vegetablephoto"/> 
            <img src={vegetable.image3} className="vegetablephoto"/> 
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
