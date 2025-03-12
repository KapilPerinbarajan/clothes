import React, { useState, useEffect } from "react";
import "./shortspage.css"; // Ensure the CSS file exists

const shortsProducts = [
  { id: 1, name: "Casual Cotton Shorts", price: 799, color: "Black", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_MCKHE6xCOMyWSBBE386Nhl0u2iOOjFxi5zz4yX3fHEOmMm6loEAZLieadxoBCiRz15YdEnFIoV4fGVeZGq5ZxcrZ2uWdk9h4YOCrsww&usqp=CAE" },
  { id: 2, name: "Denim Blue Shorts", price: 899, color: "Blue", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRl2xycY9c5euowsVxEkLAGh-Ofl8cED6bMvoOqdIoN5tF8bPnGqw3eudFYyNQtWWeQLTzNXfFrL7ZiIB_DCj_Eve-Soiw5n6hISLAdB_xkWZMrc5pT4cqg&usqp=CAE" },
  { id: 3, name: "Athletic Grey Shorts", price: 749, color: "Grey", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1ky4gHug5fo8x9DafYk6kAy8ayQorDXavp38LiwOUGjARkQTalnh_L-HUcHWVnoNYz3TOdezWbLVpFLzTaDF6lA_fWybsUGpgb64xmAY&usqp=CAE" },
  { id: 4, name: "Khaki Cargo Shorts", price: 999, color: "Khaki", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRfC6dcjxb5i2Kto-Cq0O6f6RD9qN7JqNknagcOs2JJiNCDSCkPeEzZcfHIBMQwOKBnJ2feb0Xj8T4CwEvj2H_-ljIW04AdBtMjJ6gy7PGZ7c4Sj-NZ4a3&usqp=CAE" },
];

const ShortsPage = () => {
  const [cart, setCart] = useState([]);
  const [selections, setSelections] = useState({}); // Stores size & quantity selections

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Save cart to localStorage whenever cart updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleSelection = (id, field, value) => {
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const addToCart = (product) => {
    const selected = selections[product.id];

    if (!selected?.size) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    let updatedCart;

    if (existingItemIndex !== -1) {
      // If item already exists, update its quantity
      updatedCart = cart.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + (parseInt(selected.quantity) || 1) }
          : item
      );
    } else {
      // Add new item to cart
      updatedCart = [
        ...cart,
        {
          ...product,
          size: selected.size,
          quantity: parseInt(selected.quantity) || 1,
        },
      ];
    }

    setCart(updatedCart);
    alert(`${product.name} added to cart!`);
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

            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsPage;
