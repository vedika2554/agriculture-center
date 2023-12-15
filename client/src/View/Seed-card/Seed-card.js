import React, { useEffect, useState } from "react";
import SeedCard from '../../Component/Seedcard/Seedcard'
import axios from 'axios'
import './Seed-card.css'
import Navbar from "../../Component/Nvabar/Navbar";
import Footer  from '../../Component/Footers/footer';
function Seed(){

    const[seed, setSeed] = useState([]);

    const loadSeed = async () =>{
        const responce = await axios.get('/seeds');
        setSeed(responce?.data?.data)
    }

    useEffect(()=>{
        loadSeed();
    })

return(
<>
<Navbar/>
<div className="seed">
<h1 className="seed-tital">Summer seeds</h1>

<div className="seed-container">
        {
           
            seed?.map((seed, index)=>{
                const {_id, name, price, description, image} = seed;
                return(<SeedCard key={index} id={_id} name={name} price={price}
                    description={description} image={image}/>)
            })
        
        }
        </div>
       <h1 className="seed-tital1">Mansoom seeds</h1>
       
        
       <h1 className="seed-tital2">Winter seeds</h1>
       </div>
      
<Footer/>
</>
)
}
export default Seed