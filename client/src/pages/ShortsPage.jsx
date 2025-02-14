import React, { useState } from "react";
import "./shortspage.css"; // Ensure the CSS file exists

const shortsProducts = [
  { id: 1, name: "Casual Cotton Shorts", price: 799, color: "Black", image: "https://example.com/black-shorts.jpg" },
  { id: 2, name: "Denim Blue Shorts", price: 899, color: "Blue", image: "https://example.com/blue-denim-shorts.jpg" },
  { id: 3, name: "Athletic Grey Shorts", price: 749, color: "Grey", image: "https://example.com/grey-sports-shorts.jpg" },
  { id: 4, name: "Khaki Cargo Shorts", price: 999, color: "Khaki", image: "https://example.com/khaki-cargo-shorts.jpg" },
  { id: 5, name: "Relaxed Fit Navy Shorts", price: 849, color: "Navy", image: "https://example.com/navy-shorts.jpg" },
  { id: 6, name: "Linen Beige Shorts", price: 1099, color: "Beige", image: "https://example.com/beige-shorts.jpg" },
  { id: 7, name: "White Summer Shorts", price: 799, color: "White", image: "https://example.com/white-shorts.jpg" },
  { id: 8, name: "Stretchable Black Gym Shorts", price: 899, color: "Black", image: "https://example.com/black-gym-shorts.jpg" },
];

const ShortsPage = () => {
  const [cart, setCart] = useState({});

  const handleSelection = (id, field, value) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], [field]: value },
    }));
  };

  return (
    <div className="shorts-page">
      <h2>Shorts Collection</h2>
      <div className="product-grid">
        {shortsProducts.map((product) => (
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

export default ShortsPage;
