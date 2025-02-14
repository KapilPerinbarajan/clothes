import React, { useState } from "react";
import "./loungepage.css"; // Ensure the CSS file exists

const loungeProducts = [
  { id: 1, name: "Cotton Lounge Pants", price: 999, color: "Grey", image: "https://example.com/grey-loungepants.jpg" },
  { id: 2, name: "Soft Knit Lounge Shorts", price: 799, color: "Black", image: "https://example.com/black-shorts.jpg" },
  { id: 3, name: "Cozy Fleece Joggers", price: 1299, color: "Blue", image: "https://example.com/blue-joggers.jpg" },
  { id: 4, name: "Relaxed Fit Pajamas", price: 1499, color: "White", image: "https://example.com/white-pajamas.jpg" },
  { id: 5, name: "Ultra-Soft Lounge Set", price: 1799, color: "Beige", image: "https://example.com/beige-set.jpg" },
  { id: 6, name: "Breathable Nightwear Pants", price: 1199, color: "Navy", image: "https://example.com/navy-nightwear.jpg" },
  { id: 7, name: "Lightweight Home Shorts", price: 699, color: "Brown", image: "https://example.com/brown-shorts.jpg" },
  { id: 8, name: "Stretchable Lounge Pants", price: 1399, color: "Olive", image: "https://example.com/olive-loungepants.jpg" },
];

const LoungePage = () => {
  const [cart, setCart] = useState({});

  const handleSelection = (id, field, value) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], [field]: value },
    }));
  };

  return (
    <div className="lounge-page">
      <h2>Loungewear Collection</h2>
      <div className="product-grid">
        {loungeProducts.map((product) => (
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

export default LoungePage;
