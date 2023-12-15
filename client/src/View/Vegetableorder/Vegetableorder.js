import axios from 'axios';
import './Vegetableorder.css'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/Nvabar/Navbar'
import Footer from '../../Component/Footers/footer'



function Myorders(){
    const [vegitableorders, setVegitableorders] = useState([]);

    const fetchVegitableorders = async()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`/vegitablesorders?id=${user._id}`)
        setVegitableorders(response?.data?.data);
    }
    useEffect(()=>{
        fetchVegitableorders();
    },[]);
    return(
        <>
<Navbar/>
<h1 className="vegitableordertital">Your orders</h1>
        <hr className="hrtag"/>
        <div>
         
            <div className='myvegitableorder'>
            {
               vegitableorders?.map((vegitableorders, index)=>{
                    const {vegitable, quantity, shippingAddress}=vegitableorders;
                    return(<div key={index} className='vegitableordercard'>
                        <img className='vegitableimg' src={vegitable.image}/>
                        <h2 className='vegitablename'>{vegitable.name}</h2>
                        <h4 className='vegitableprice'> Price: {vegitable.price}*{quantity}={vegitable*quantity}</h4>
                        <h4 className='vegitableaddress'>Address : {shippingAddress}</h4>

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