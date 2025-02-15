import React, { useState } from "react";
import "./sweatshirtpage.css";

const sweatshirtProducts = [
  { id: 1, name: "Classic Sweatshirt", price: 1499, color: "Red", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvJZywXnrubqQ5wLwfpkB9h2jJh0Wk7NfwIV4fKLkTmK7Q_8s6Uoco9BXU4JLNK5l1imdnilX4pwKbk2crdIx7XQms7TqdowGdN9yHh25jBu5NiDCOxnYe&usqp=CAE" },
  { id: 2, name: "Striped Sweatshirt", price: 1599, color: "White", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6SAKlZCcppAZQ9lpCrXOousZIiw7HtsJsX1zUCtGVOokcVXcZ2CwNLRQuysQAoTwOBxpkIAuSUk0WWo0lYfAsOZju42pWGWUkOdS3jIYVnmZafuliMjZj&usqp=CAE" },
  { id: 3, name: "Navy Blue Sweatshirt", price: 1699, color: "Navy Blue", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTWMLqOpnqBXSO2NsaZX6gemPzKzsTm8aT_ZZoVfXF7gqgQOtMINidWXqbR5IkKNDajRQf2GY0Fid6GW5wWBrQR9xSUWDewq7lVkVZH2cgdYm7vOzAVxNm8wg&usqp=CAE" },
  { id: 4, name: "White Sweatshirt", price: 1399, color: "White", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7ssGGOkByafZ7TMVdrVu5sslEfYHaaSA7XXl46o-yxW8kVH8Pc1WDBZGOhmlTt067CXKMsPQjgs0S4LJsm29K6NHOe7hpMTapCdYa-p3rZ4PcJfidUfdDyA&usqp=CAE" },
  { id: 5, name: "Black Sweatshirt", price: 1499, color: "Black", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaDvu__G3PPvZEb-j6FGfFHae8oW2zSS2bLMvhRwHltP_pGYZ05dQ0NKSujFEjlG8jW38ow7lnSjoMcMnU9LQGXSyx22Ii6xNlISPcCbvlb-OCpKZkIYWS9A&usqp=CAE" },
  { id: 6, name: "Pink Sweatshirt", price: 1299, color: "Pink", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7snBUxMUdDQDphIucKJaJ-xabyf9MMsw4nHmS_rRDrQVp0XzVT-eVxWIKviF6OrYxg5fALwdPFq8HxIUT1U00ogn8YEULVqu6kiCKSQuh&usqp=CAEttps://example.com/pink-sweatshirt.jpg" },
  { id: 7, name: "Green Sweatshirt", price: 1499, color: "Green", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQp9S4PVNHY-lCrqjiErOTreSmkjTZH5lFKp1D4ubqQskwGmIyXPE5faQVYe0Fm-6uZhTJIXmw5YP6kdpIlMYwFqrlU-NeqQABAJdhDmQ4&usqp=CAE" },
  { id: 8, name: "Yellow Sweatshirt", price: 1599, color: "Yellow", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGBIJmeJ2fWIOti9G1i9Isyp82BPTQPVHtONRk9KuS07_A5zCukpHnaut6g9y6fdOVrMQ3fQG__Ut7oQyGBXksheym8dOroTkm8AH1Bw-nKVHvLrm9uHvR&usqp=CAE" },
 
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
