import React, { useState } from "react";
import "./roundpage.css";

const roundProducts = [
  { id: 1, name: "Classic Round T-Shirt", price: 799, color: "Red", image: "https://example.com/red-round.jpg" },
  { id: 2, name: "Striped Round T-Shirt", price: 899, color: "White", image: "https://example.com/white-striped-round.jpg" },
  { id: 3, name: "Navy Blue Round T-Shirt", price: 999, color: "Navy Blue", image: "https://example.com/navy-round.jpg" },
  { id: 4, name: "White Round T-Shirt", price: 749, color: "White", image: "https://example.com/white-round.jpg" },
  { id: 5, name: "Black Round T-Shirt", price: 849, color: "Black", image: "https://example.com/black-round.jpg" },
  { id: 6, name: "Red Round T-Shirt", price: 699, color: "Pink", image: "https://example.com/pink-round.jpg" },
  { id: 7, name: "Green Round T-Shirt", price: 799, color: "Green", image: "https://example.com/green-round.jpg" },
  { id: 8, name: "Yellow Round T-Shirt", price: 899, color: "Yellow", image: "https://example.com/yellow-round.jpg" },
  { id: 9, name: "Printed Round T-Shirt", price: 999, color: "Blue", image: "https://example.com/blue-printed-round.jpg" },
  { id: 10, name: "Printed Round T-Shirt", price: 1099, color: "Red", image: "https://example.com/red-printed-round.jpg" },
  { id: 11, name: "Printed Round T-Shirt", price: 1099, color: "White", image: "https://example.com/white-printed-round.jpg" },
];

const RoundPage = () => {
  const [cart, setCart] = useState({});

  const handleSelection = (id, field, value) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], [field]: value },
    }));
  };

  return (
    <div className="round-page">
      <h2>Round Neck T-Shirts</h2>
      <div className="product-grid">
        {roundProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-title">{product.name}</p>
            <p className="product-color"><strong>Color:</strong> {product.color}</p>
            <p className="product-price">Rs. {product.price}</p>

            {/* Size Selection */}
            <label>Size: </label>
            <select onChange={(e) => handleSelection(product.id, "size", e.target.value)}>
              <option value="">Select Size</option>
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            {/* Quantity Selection */}
            <label>Quantity: </label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              onChange={(e) => handleSelection(product.id, "quantity", e.target.value)}
            />

            <button onClick={() => console.log(cart)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundPage;
