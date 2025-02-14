import React, { useState } from "react";
import "./sweatshirtpage.css";

const sweatshirtProducts = [
  { id: 1, name: "Classic Sweatshirt", price: 1499, color: "Red", image: "https://example.com/red-sweatshirt.jpg" },
  { id: 2, name: "Striped Sweatshirt", price: 1599, color: "White", image: "https://example.com/white-striped-sweatshirt.jpg" },
  { id: 3, name: "Navy Blue Sweatshirt", price: 1699, color: "Navy Blue", image: "https://example.com/navy-sweatshirt.jpg" },
  { id: 4, name: "White Sweatshirt", price: 1399, color: "White", image: "https://example.com/white-sweatshirt.jpg" },
  { id: 5, name: "Black Sweatshirt", price: 1499, color: "Black", image: "https://example.com/black-sweatshirt.jpg" },
  { id: 6, name: "Pink Sweatshirt", price: 1299, color: "Pink", image: "https://example.com/pink-sweatshirt.jpg" },
  { id: 7, name: "Green Sweatshirt", price: 1499, color: "Green", image: "https://example.com/green-sweatshirt.jpg" },
  { id: 8, name: "Yellow Sweatshirt", price: 1599, color: "Yellow", image: "https://example.com/yellow-sweatshirt.jpg" },
  { id: 9, name: "Printed Sweatshirt", price: 1799, color: "Blue", image: "https://example.com/blue-printed-sweatshirt.jpg" },
  { id: 10, name: "Printed Sweatshirt", price: 1899, color: "Red", image: "https://example.com/red-printed-sweatshirt.jpg" },
  { id: 11, name: "Printed Sweatshirt", price: 1899, color: "White", image: "https://example.com/white-printed-sweatshirt.jpg" },
];

const SweatshirtPage = () => {
  const [cart, setCart] = useState({});

  const handleSelection = (id, field, value) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], [field]: value },
    }));
  };

  return (
    <div className="sweatshirt-page">
      <h2>Sweatshirts Collection</h2>
      <div className="product-grid">
        {sweatshirtProducts.map((product) => (
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

            <button className="add-to-cart" onClick={() => console.log(cart)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SweatshirtPage;
