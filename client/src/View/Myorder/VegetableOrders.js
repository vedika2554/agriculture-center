import React, { useEffect, useState } from "react";
import "./OrderCard.css"; 
import axios from "axios";

function VegetableOrders() {
  const [vegetableOrders, setVegetableOrders] = useState([]);

  const fetchVegetableOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    const response = await axios.get(`/vegetableorders?id=${user._id}`);

    setVegetableOrders(response.data.data);
  };

  useEffect(() => {
    fetchVegetableOrders();
  }, []);

  return (
    <div>
      <h1 className="text-center">My Vegetable Orders</h1>

      {vegetableOrders.map((vegetableOrder, index) => {
        const { vegetable, quantity, shippingAddress } = vegetableOrder;

        return (
          <div key={index} className="order-card">
            <img src={vegetable.image} className="img-container" alt={vegetable.name} />
            <h2>{vegetable.name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Price: ₹ {vegetable.price}</p>
            <p>Total Amount: ₹ {vegetable.price * quantity}</p>
            <p>Shipping Address: {shippingAddress}</p>
          </div>
        );
      })}
    </div>
  );
}

export default VegetableOrders;
