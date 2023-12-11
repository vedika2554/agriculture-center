import axios from 'axios';
import './Flowerorder.css'
import React, { useEffect, useState } from 'react'
import Navbar from './../../Component/Nvabar/Navbar'
import Footer from './../../Component/Footers/footer'



function Myorders(){
    const [flowerorders, setFlowerorders] = useState([]);

    const fetchFlowerorders = async()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`/flowersorders?id=${user._id}`)
        setFlowerorders(response?.data?.data);
    }
    useEffect(()=>{
        fetchFlowerorders();
    },[]);
    return(
        <>
<Navbar/>
<h1 className="flowerordertital">Your orders</h1>
        
        <div>
         
            <div className='myflowerorder'>
            {
                flowerorders?.map((flowerorders, index)=>{
                    const {flower, quantity, shippingAddress}=flowerorders;
                    return(<div key={index} className='flowerordercard'>
                        <img className='flowerimg' src={flower.image}/>
                        <h2 className='flowername'>{flower.name}</h2>
                        <h4 className='flowerprice'> Price: {flower.price}*{quantity}={flower.price*quantity}</h4>
                        <h4 className='floweraddress'>Address : {shippingAddress}</h4>


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