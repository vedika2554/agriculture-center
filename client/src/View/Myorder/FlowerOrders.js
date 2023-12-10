import React, { useEffect, useState } from "react";
import "./OrderCard.css"; 
import axios from "axios";

function FlowerOrders() {
  const [flowerOrders, setFlowerOrders] = useState([]);

  const fetchFlowerOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    const response = await axios.get(`/flowerorders?id=${user._id}`);

    setFlowerOrders(response.data.data);
  };

  useEffect(() => {
    fetchFlowerOrders();
  }, []);

  return (
    <div>
      <h1 className="text-center">My Flower Orders</h1>

      {flowerOrders.map((flowerOrder, index) => {
        const { flower, quantity, shippingAddress } = flowerOrder;

        return (
          <div key={index} className="order-card">
            <img src={flower.image} className="img-container" alt={flower.name} />
            <h2>{flower.name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Price: ₹ {flower.price}</p>
            <p>Total Amount: ₹ {flower.price * quantity}</p>
            <p>Shipping Address: {shippingAddress}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FlowerOrders;
