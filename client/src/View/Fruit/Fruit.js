import React, { useEffect, useState } from "react";
import FruitCard from '../../Component/Fruitcard/Fruitcard'
import axios from 'axios'
import './Fruit.css'
import Navbar from "./../../Component/Nvabar/Navbar";
import Footer  from '../../Component/Footers/footer';
function Fruit(){

    const[fruit, setFruit] = useState([]);

    const loadFruit = async () =>{
        const responce = await axios.get('/fruits');
        setFruit(responce?.data?.data)
    }

    useEffect(()=>{
        loadFruit();
    })

return(
<>
<Navbar/>
<div className="fruit">
<h1 className="fruit-tital">Summer fruits</h1>

<div className="fruit-container">
        {
           
            fruit?.map((fruit, index)=>{
                const {_id, name, price, description, image} = fruit;
                return(<FruitCard key={index} id={_id} name={name} price={price}
                    description={description} image={image}/>)
            })
        
        }
        </div>
       <h1 className="fruit-tital1">Mansoom fruits</h1>
        
       <h1 className="fruit-tital2">Winter fruits</h1>
      </div>
<Footer/>
</>
)
}
export default Fruit