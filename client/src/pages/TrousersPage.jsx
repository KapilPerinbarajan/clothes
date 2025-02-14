import React, { useState } from "react";
import "./trouserspage.css"; // Ensure the CSS file exists

const trousersProducts = [
  { id: 1, name: "Slim Fit Trousers", price: 1299, color: "Black", image: "https://example.com/black-trousers.jpg" },
  { id: 2, name: "Formal Grey Trousers", price: 1399, color: "Grey", image: "https://example.com/grey-trousers.jpg" },
  { id: 3, name: "Casual Blue Trousers", price: 1199, color: "Blue", image: "https://example.com/blue-trousers.jpg" },
  { id: 4, name: "Khaki Chinos", price: 1499, color: "Khaki", image: "https://example.com/khaki-chinos.jpg" },
  { id: 5, name: "Regular Fit Trousers", price: 1099, color: "Navy", image: "https://example.com/navy-trousers.jpg" },
  { id: 6, name: "Stretchable Trousers", price: 1599, color: "Beige", image: "https://example.com/beige-trousers.jpg" },
  { id: 7, name: "Black Cargo Pants", price: 1699, color: "Black", image: "https://example.com/black-cargo.jpg" },
  { id: 8, name: "White Linen Trousers", price: 1399, color: "White", image: "https://example.com/white-linen.jpg" },
];

const TrousersPage = () => {
  const [cart, setCart] = useState({});

  const handleSelection = (id, field, value) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], [field]: value },
    }));
  };

  return (
    <div className="trousers-page">
      <h2>Trousers Collection</h2>
      <div className="product-grid">
        {trousersProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-title">{product.name}</p>
            <p className="product-color"><strong>Color:</strong> {product.color}</p>
            <p className="product-price">Rs. {product.price}</p>

            {/* Size Selection */}
            <label>Size: </label>
            <select onChange={(e) => handleSelection(product.id, "size", e.target.value)}>
              <option value="">Select Size</option>
              {["28", "30", "32", "34", "36", "38", "40"].map((size) => (
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

export default TrousersPage;
