import axios from 'axios';
import './Seedorder.css'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footers/footer'

function Myorders(){
    const [seedorders, setSeedorders] = useState([]);

    const fetchSeedorders = async()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`/seedsorders?id=${user._id}`)
        setSeedorders(response?.data?.data);
    }
    useEffect(()=>{
        fetchSeedorders();
    },[]);
    return(
        <>
<Navbar/>
<h1 className="seedordertital">Your orders</h1>
      
        <div>
         
            <div className='myseedorder'>
            {
                seedorders?.map((seedorders, index)=>{
                    const {seed, quantity, shippingAddress}=seedorders;
                    return(<div key={index} className='seedordercard'>
                        <img className='seedimg' src={seed.image}/>
                        <h2 className='seedname'>{seed.name}</h2>
                        <h4 className='seedprice'> Price: {seed.price}*{quantity}={seed.price*quantity}</h4>
                        <h4 className='seedaddress'>Address : {shippingAddress}</h4>


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