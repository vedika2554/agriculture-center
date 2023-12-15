import React, { useEffect, useState } from "react";
import FlowerCard from '../../Component/Flowercard/Flowercard';
import axios from 'axios'
import './Flowers.css'
import Navbar from "../../Component/Nvabar/Navbar";
import Footer  from '../../Component/Footers/footer';

function Flowers(){

    const[flower, setFlower] = useState([]);

    const loadFlower = async () =>{
        const responce = await axios.get('/flowers');
        setFlower(responce?.data?.data)
    }

    useEffect(()=>{
        loadFlower();
    })

return(
<><Navbar/>

<div className="flower">
<h1 className="flower-tital">Summer flowers</h1>

<div className="flowers-container">
 
        {
            flower?.map((flower, index)=>{
               const {_id, name, price, description, image} = flower;
                return(<FlowerCard key={index} id={_id} name={name} price={price}
                    description={description} image={image}/>)
                    
            })
        }
      
        </div>
        
        <h1 className="flower-tital1">Mansoom flowers</h1>
        <h1 className="flower-tital2">Winter flowers</h1>
        </div>
        <Footer/>
</>
)
}
export default Flowers