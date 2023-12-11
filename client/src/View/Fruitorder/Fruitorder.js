import axios from 'axios';
import './Fruitorder.css'
import React, { useEffect, useState } from 'react'
import Navbar from './../../Component/Nvabar/Navbar'
import Footer from './../../Component/Footers/footer'



function Myorders(){
    const [fruitorders, setFruitorders] = useState([]);

    const fetchFruitorders = async()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`/fruitsorders?id=${user._id}`)
        setFruitorders(response?.data?.data);
    }
    useEffect(()=>{
        fetchFruitorders();
    },[]);
    return(
        <>
<Navbar/>
<h1 className="fruitordertital">Your orders</h1>
       
        <div>
         
            <div className='myfruitorder'>
            {
                fruitorders?.map((fruitorders, index)=>{
                    const {fruit, quantity, shippingAddress}=fruitorders;
                    return(<div key={index} className='fruiordercard'>
                        <img className='fruitimg' src={fruit.image}/>
                        <h2 className='fruitname'>{fruit.name}</h2>
                        <h4 className='fruitprice'> Price: {fruit.price}*{quantity}={fruit.price*quantity}</h4>
                        <h4 className='fruitaddress'>Address : {shippingAddress}</h4>


                    </div>)
                })
            }
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Myorders