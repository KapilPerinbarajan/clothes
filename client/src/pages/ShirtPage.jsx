import React, { useState } from "react";
import "./shirtpage.css";

const shirtProducts = [
  { id: 1, name: "Classic Shirt", price: 999, color: "Red", image: "https://example.com/red-shirt.jpg" },
  { id: 2, name: "Striped Shirt", price: 1099, color: "White", image: "https://example.com/white-striped-shirt.jpg" },
  { id: 3, name: "Navy Blue Shirt", price: 1199, color: "Navy Blue", image: "https://example.com/navy-shirt.jpg" },
  { id: 4, name: "White Shirt", price: 899, color: "White", image: "https://example.com/white-shirt.jpg" },
  { id: 5, name: "Black Shirt", price: 949, color: "Black", image: "https://example.com/black-shirt.jpg" },
  { id: 6, name: "Pink Shirt", price: 799, color: "Pink", image: "https://example.com/pink-shirt.jpg" },
  { id: 7, name: "Green Shirt", price: 999, color: "Green", image: "https://example.com/green-shirt.jpg" },
  { id: 8, name: "Yellow Shirt", price: 1099, color: "Yellow", image: "https://example.com/yellow-shirt.jpg" },
  { id: 9, name: "Printed Shirt", price: 1299, color: "Blue", image: "https://example.com/blue-printed-shirt.jpg" },
  { id: 10, name: "Printed Shirt", price: 1399, color: "Red", image: "https://example.com/red-printed-shirt.jpg" },
  { id: 11, name: "Printed Shirt", price: 1399, color: "White", image: "https://example.com/white-printed-shirt.jpg" },
];

const ShirtPage = () => {
  const [cart, setCart] = useState({});

  const handleSelection = (id, field, value) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], [field]: value },
    }));
  };

  return (
    <div className="shirt-page">
      <h2>Shirts Collection</h2>
      <div className="product-grid">
        {shirtProducts.map((product) => (
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

export default ShirtPage;
