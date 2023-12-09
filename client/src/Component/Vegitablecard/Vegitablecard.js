import React from "react";
import {Link} from 'react-router-dom'
import "./Vegitablecard.css"

function VegitableCard({id, name, price, description, image})
{
    return (
        <div className="Flower-card">
            <img className="flower-img"src={image}alt={name}/>
            <h2 className="flower-name">{name}</h2>
            <h3 className="flower-price">Price :  ₹ {price}</h3>
            <p className="flower-description">{description}</p>
            <Link  className="flower-shop-now"to={`/buyvegetable/${id}`}>Shop now</Link>

        </div>
    )
}
export default VegitableCard