import React, { useEffect, useState } from "react";
import Nearbycard from './../../Component/Nearbycard/Nearbycard'
import axios from 'axios'
import './Nearbystore.css'
import Navbar from "../../Component/Nvabar/Navbar";
import Footer  from '../../Component/Footers/footer';
function Store(){

    const[store, setStore] = useState([]);

    const loadStore = async () =>{
        const responce = await axios.get('/stores');
        setStore(responce?.data?.data)
    }

    useEffect(()=>{
        loadStore();
    })

return(
<>
<Navbar/>
<h1 className="Nearby-tital">Nearby stores</h1>
<div className="Nearby-container">
        {
            store?.map((store, index)=>{
                const {_id, name, description, image} = store;
                return(<Nearbycard key={index} id={_id} name={name} 
                    description={description} image={image} />)
            })
        }
        </div>
       <Footer/>
</>
)
}
export default Store