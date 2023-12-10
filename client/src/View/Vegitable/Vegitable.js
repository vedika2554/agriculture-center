import React, { useEffect, useState } from "react";
import VegitableCard from '../../Component/Vegitablecard/Vegitablecard';
import axios from 'axios'
import './Vegitable.css'
function Vegitable(){

    const[vegitable, setVegitable] = useState([]);

    const loadVegitable = async () =>{
        const responce = await axios.get('/vegitable');
        setVegitable(responce?.data?.data)
    }

    useEffect(()=>{
        loadVegitable();
    })

return(
<>

<h1 className="flower-tital">Summer</h1>

<div className="flowers-container">

        {
            vegitable?.map((vegitable, index)=>{
                const {_id, name, price, description, image} = vegitable;
                return(<VegitableCard key={index} id={_id} name={name} price={price}
                    description={description} image={image}/>)
            })
        }
        </div>
       
         <h1 className="flower-tital1">Mansoom</h1>
        
         
        <h1 className="flower-tital2">Winter</h1> 
        
        
</>
)
}
export default Vegitable