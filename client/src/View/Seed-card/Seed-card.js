import React, { useEffect, useState } from 'react';
import SeedCard from '../../Component/Seedcard/Seedcard';
import axios from 'axios'
import './Seed-card.css'

function Seed(){

    const [seed, setSeed] = useState([]);

    const loadSeed = async () =>{
        const responce = await axios.get('/seeds');
        setSeed(responce?.data?.data)
    }

    useEffect(()=>{
        loadSeed();
    })


    return(
        <>
        <h1 className='seed-title'>Summer Seeds</h1>

        <div className='seed-container'>
            {
                seed?.map((seed, index)=>{
                    const {_id, name,price, description, image} = seed;
                    return (<SeedCard key={index} id={_id} name={name} description={description} image={image} price={price}/>)
                })
            }
        </div>
        
        
        </>
    )
}


export default Seed;