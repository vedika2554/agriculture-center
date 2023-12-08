import React from "react";
import {Link} from 'react-router-dom'
import "./Seedcard.css"

function Seedcard({id, name,price,  description, image})
{
    return (
        <div className="container-seed">
        <div className="seed-card">
            <img className="seed-img"src={image}alt={name}/>
            <h2 className="seed-name">{name}</h2>
            <h3 className="fruit-price">Price :  ₹ {price}</h3>
            <p className="seed-description">{description}</p>
            <Link  className="seed-shop-now"to={`/buy/${id}`}>Shop now</Link>

        </div>
        </div>
    )
}
export default Seedcard