import React, { useState } from "react";
import "./vestpage.css"; // Ensure the CSS file exists

const vestProducts = [
  { id: 1, name: "Classic White Vest", price: 499, color: "White", image: "https://example.com/white-vest.jpg" },
  { id: 2, name: "Ribbed Black Vest", price: 599, color: "Black", image: "https://example.com/black-vest.jpg" },
  { id: 3, name: "Athletic Grey Vest", price: 549, color: "Grey", image: "https://example.com/grey-vest.jpg" },
  { id: 4, name: "Cotton Navy Vest", price: 699, color: "Navy", image: "https://example.com/navy-vest.jpg" },
  { id: 5, name: "Sleeveless Beige Vest", price: 649, color: "Beige", image: "https://example.com/beige-vest.jpg" },
  { id: 6, name: "Fitted Olive Vest", price: 749, color: "Olive", image: "https://example.com/olive-vest.jpg" },
  { id: 7, name: "Casual Blue Vest", price: 599, color: "Blue", image: "https://example.com/blue-vest.jpg" },
  { id: 8, name: "Relaxed Fit Brown Vest", price: 549, color: "Brown", image: "https://example.com/brown-vest.jpg" },
];

const VestPage = () => {
  const [cart, setCart] = useState({});

  const handleSelection = (id, field, value) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], [field]: value },
    }));
  };

  return (
    <div className="vest-page">
      <h2>Vest Collection</h2>
      <div className="product-grid">
        {vestProducts.map((product) => (
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

export default VestPage;
