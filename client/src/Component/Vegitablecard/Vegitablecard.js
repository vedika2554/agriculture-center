import React from "react";
import {Link} from 'react-router-dom'
import "./Vegitablecard.css"

function VegitableCard({id, name, price, description, image})
{
    return (
        <div className="vegetable-card">
            <img className="vegetable-img"src={image}alt={name}/>
            <h2 className="vegetable-name">{name}</h2>
            <h3 className="vegetable-price">Price :  ₹ {price}</h3>
            <p className="vegetable-description">{description}</p>
            <Link  className="vegetable-shop-now"to={`/buyvegetable/${id}`}>Shop now</Link>

        </div>
    )
}
export default VegitableCard