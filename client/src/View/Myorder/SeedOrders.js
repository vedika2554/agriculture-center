import React, { useEffect, useState } from "react";
import "./OrderCard.css"; 
import axios from "axios";

function SeedsOrders() {
  const [seedsOrders, setSeedsOrders] = useState([]);

  const fetchSeedsOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    const response = await axios.get(`/seedsorders?id=${user._id}`);

    setSeedsOrders(response.data.data);
  };

  useEffect(() => {
    fetchSeedsOrders();
  }, []);

  return (
    <div>
      <h1 className="text-center">My Seeds Orders</h1>

      {seedsOrders.map((seedsOrder, index) => {
        const { seeds, quantity, shippingAddress } = seedsOrder;

        return (
          <div key={index} className="order-card">
            <img src={seeds.image} className="img-container" alt={seeds.name} />
            <h2>{seeds.name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Price: ₹ {seeds.price}</p>
            <p>Total Amount: ₹ {seeds.price * quantity}</p>
            <p>Shipping Address: {shippingAddress}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SeedsOrders;
