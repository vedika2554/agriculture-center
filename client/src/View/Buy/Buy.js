import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Buy.css";

export default function Buy() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState('');

  const loadProduct = async () => {
    if (!id) {
      window.location.href = "/";
    }

    const response = await axios.get(`/flowers/${id}`);
    setProduct(response.data.data); // Fix the variable name
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const placeOrder = async () => {
    const response = await axios.post("/order", {
      flowers: product, // Fix the variable name
      user: user._id,
      quantity: quantity,
      shippingAddress: shippingAddress,
    });

    alert(response.data.message);
    window.location.href = "/orders";
  };

  return (
    <div className="buy-container">
      <img src={product.image} alt={product.name} className="buy-product-img" />
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h1>{product.price}</h1>

        <div className="qt-container">
          <span className="quantity-btn" onClick={decrease}>-</span>
          <span className="quantity-text">{quantity} </span>
          <span className="quantity-btn" onClick={increase}>+</span>
        </div>

        <input
          type="text"
          placeholder="shippingAddress"
          className="shippingAddress"
          value={shippingAddress}
          onChange={(e) => {
            setShippingAddress(e.target.value);
          }}
        />

        <button className="Buy-btn" type="button" onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
}
