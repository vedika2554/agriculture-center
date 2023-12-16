import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detailnearbystore.css";
import Navbar from '../../Component/Navbar/Navbar'
import Footer  from '../../Component/Footers/footer';
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
        <>
        <Navbar/>
        <div className="buy-container">
            <img src={store.image} alt={store.name} className="buy-product-img"/>
            <div >
                <h1 className="cname">Company information</h1>
                <h3 className="nearbyname">Name : {store.name}</h3>
                <p className="nearbydescription">Description : {store.description}</p>
                <h3 className="noname">Contact No : {store.mobile}</h3>
                <h3 className="nearbyname">Timing : {store.hours}</h3>
                <p className="nearbydescription">Visit us : {store.url}</p>
                <h1 className="pho">Photo</h1>
                <div className="nearbyphotocontainer">
                    <img src={store.image1}className="nearbyphoto"/>
                    <img src={store.image2}className="nearbyphoto"/>
                    <img src={store.image3}className="nearbyphoto"/>
                    

                </div>
               

                
            </div>
        </div>
      <Footer/>
      </>
      
    )
}
