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
            <div >
                <h3>Company information</h3>
                <h4>Name : {store.name}</h4>
                <p>Description : {store.description}</p>
                <h4>Contact NO : {store.mobile}</h4>
                <h5>Timing : {store.hours}</h5>
                <p>Visit us : {store.url}</p>
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
