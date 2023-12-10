import React, { useEffect, useState } from "react";
import Nearbycard from './../../Component/Nearbycard/Nearbycard'
import axios from 'axios'
import './Nearbystore.css'
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
<><h1 className="Nearby-tital">Nearby stores</h1>
<div className="Nearby-container">
        {
            store?.map((store, index)=>{
                const {_id, name, description, image} = store;
                return(<Nearbycard key={index} id={_id} name={name} 
                    description={description} image={image} />)
            })
        }
        </div>
       
</>
)
}
export default Store