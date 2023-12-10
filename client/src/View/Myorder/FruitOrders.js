import React, { useEffect, useState } from "react";
import "./OrderCard.css"; 
import axios from "axios";

function FruitOrders() {
  const [fruitOrders, setFruitOrders] = useState([]);

  const fetchFruitOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    const response = await axios.get(`/fruitorders?id=${user._id}`);

    setFruitOrders(response.data.data);
  };

  useEffect(() => {
    fetchFruitOrders();
  }, []);

  return (
    <div>
      <h1 className="text-center">My Fruit Orders</h1>

      {fruitOrders.map((fruitOrder, index) => {
        const { fruit, quantity, shippingAddress } = fruitOrder;

        return (
          <div key={index} className="order-card">
            <img src={fruit.image} className="img-container" alt={fruit.name} />
            <h2>{fruit.name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Price: ₹ {fruit.price}</p>
            <p>Total Amount: ₹ {fruit.price * quantity}</p>
            <p>Shipping Address: {shippingAddress}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FruitOrders;
