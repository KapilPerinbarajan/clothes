import { useState } from "react";
import "./CartPage.css";

function CartPage() {
  const [cartItems] = useState([
    {
      id: 1,
      name: "Shirt",
      price: 500,
      quantity: 2,
      size: "M",
      color: "Blue",
      image: "https://via.placeholder.com/100?text=Shirt",
    },
    {
      id: 2,
      name: "Jeans",
      price: 1200,
      quantity: 1,
      size: "32",
      color: "Black",
      image: "https://via.placeholder.com/100?text=Jeans",
    },
    {
      id: 3,
      name: "Jacket",
      price: 2000,
      quantity: 1,
      size: "L",
      color: "Green",
      image: "https://via.placeholder.com/100?text=Jacket",
    },
  ]);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Cart Summary</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <img
                src={item.image}
                alt={item.name}
                className="item-image"
              />
              <div>
                <span className="item-name">{item.name}</span>
                <div className="item-extra-details">
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                </div>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
            </div>
            <span className="item-total">₹{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="total-section">
        <h3>Total Amount: ₹{totalAmount}</h3>
      </div>

      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
}

export default CartPage;
