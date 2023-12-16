import React, { useEffect, useState } from "react";
import VegitableCard from '../../Component/Vegitablecard/Vegitablecard';
import axios from 'axios'
import './Vegitable.css'
import Navbar from "../../Component/Navbar/Navbar";
import Footer  from '../../Component/Footers/footer';
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
<Navbar/>
<div className="vegitable">
<h1 className="vegitable-tital">Summer vegitable</h1>

<div className="vegitable-container">

        {
            vegitable?.map((vegitable, index)=>{
                const {_id, name, price, description, image} = vegitable;
                return(<VegitableCard key={index} id={_id} name={name} price={price}
                    description={description} image={image}/>)
            })
        }
        </div>
       
         <h1 className="vegitable-tital1">Mansoom vegitable</h1>
        
         
        <h1 className="vegitable-tital2">Winter vegitable</h1> 
        </div>
        <Footer/>
</>
)
}
export default Vegitable