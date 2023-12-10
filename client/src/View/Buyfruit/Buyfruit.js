import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Buyfruit.css";
import Navbar from './../../Component/Nvabar/Navbar'
import Footer  from '../../Component/Footers/footer';
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
    return(<>
    <Navbar/>
        <div className="fruitbuy-container">
            <img src={fruit.image} alt={fruit.name} className="fruitbuy-product-img"/>
            <div>
                <h1>Name : {fruit.name}</h1>
                <p>Description : {fruit.description}</p>
                <h1>Price : ₹ {fruit.price}</h1>

            <div className="fruitqt-container">
            <span className="fruitquantity-text">Quantity : </span>
                <span className="fruitquantity-btn" onClick={decrease}>-</span>
                <span className="fruitquantity-text">{quantity} </span>
                <span className="fruitquantity-btn" onClick={increase}>+</span>
            </div>
            <h1>Photo : </h1>
            <div className="fruitphotocontainer">
            <img src={fruit.image1} className="fruitphoto"/> 
            <img src={fruit.image2} className="fruitphoto"/> 
            <img src={fruit.image3} className="fruitphoto"/> 
            </div>
            <h1>Address : </h1>
            <input type="text"
                placeholder="shippingAddress"
                className="fruitshippingAddress"
                value={shippingAddress}
                onChange={(e)=>{
                    setShippingAddress(e.target.value);
                }}
                />

                <button className="fruitBuy-btn" type="button" onClick={placeorder}>PlaceOrder</button>
            </div>
        </div>
      <Footer/>
      </>
    )
}
