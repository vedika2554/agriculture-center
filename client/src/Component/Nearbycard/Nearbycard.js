import React from "react";
import {Link} from 'react-router-dom'
import "./Nearbycard.css"

function NearbyCard({id, name, description, image})
{
    return (
        <div className="Nearby-card">
            <img className="Nearby-img"src={image}alt={name}/>
            <h2 className="Nearby-name">{name}</h2>
            <p className="Nearby-description">{description}</p>
            <Link  className="Nearby-shop-now"to={`/detail/${id}`}>See details</Link>

        </div>
    )
}
export default NearbyCard