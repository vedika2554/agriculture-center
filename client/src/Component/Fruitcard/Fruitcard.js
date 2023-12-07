import React from "react";
import {Link} from 'react-router-dom'
import "./Fruitcard.css"

function FruitCard({id, name, price, description, image})
{
    return (
        <div className="fruit-card">
            <img className="fruit-img"src={image}alt={name}/>
            <h2 className="fruit-name">{name}</h2>
            <h3 className="fruit-price">Price :  ₹ {price}</h3>
            <p className="fruit-description">{description}</p>
            <Link  className="fruit-shop-now"to={`/buy/${id}`}>Shop now</Link>

        </div>
    )
}
export default FruitCard