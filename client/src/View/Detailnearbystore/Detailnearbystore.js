import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detailnearbystore.css";

export default function Buy(){
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [store,setStore] = useState({});
    
    const loadStore = async()=>{

        if(!id){
            window.location.href = "/";
        }

         const response = await axios.get(`/stores/${id}`)
     

        setStore(response.data.data);
    };
    







    useEffect(()=>{
        loadStore();
        
    },[]);


   
    return(
        <div className="buy-container">
            <img src={store.image} alt={store.name} className="buy-product-img"/>
            <div>
                Company information
                <h1>{store.name}</h1>
                <p>{store.description}</p>
                <h2>{store.mobile}</h2>
                <h3>{store.hours}</h3>
                <p>{store.url}</p>
                <h1>Photo</h1>
                <div className="nearbyphotocontainer">
                    <img src={store.image1}className="nearbyphoto"/>
                    <img src={store.image2}className="nearbyphoto"/>
                    <img src={store.image3}className="nearbyphoto"/>
                    

                </div>
               

                
            </div>
        </div>
    )
}
