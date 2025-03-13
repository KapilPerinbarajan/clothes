import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cartpage.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-page">
      <h2>🛍️ Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Start shopping now! 🛒</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p><strong>Color:</strong> {item.color}</p>
                <p><strong>Size:</strong> {item.size || "Not Selected"}</p>
                <p><strong>Price:</strong> Rs. {item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>🗑 Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Amount: <span>Rs. {totalPrice}</span></h3>
            <button 
              className="checkout-btn" 
              onClick={() => navigate("/payment", { state: { totalAmount: totalPrice } })}
            >
              ✅ Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
