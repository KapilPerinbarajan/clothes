import React, { useState } from "react";
import "./trouserspage.css"; // Ensure the CSS file exists

const trousersProducts = [
  { id: 1, name: "Slim Fit Trousers", price: 1299, color: "Black", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQWb379D3stzx5wGg_3J726WWWnySVRS6diC5XamygRP7CdYhmQkGwGT9G2hZqYiLQkvMx7LhgHfOQ9Q29VEYk-DIkIXhjqh--PILD3D2M&usqp=CAE" },
  { id: 2, name: "Formal Grey Trousers", price: 1399, color: "Grey", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdtvx-FscED46V6PJBoL-n4DdpX724dyyYGsXuktWGPxy8tZyTTngnLWQ-BVzZKetWWLwvsrb5S1Ml4NbHKjgWhk1Gd8dqHu4ThatyLZI&usqp=CAE" },
  { id: 3, name: "Casual Blue Trousers", price: 1199, color: "Blue", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKP3tzIMIXMItfPPiujazJfwy3GlUHz4H9q0GU6UDguiZ7hTTErlmHBf8WflEhXEiFnR7WgV_HPDYorC0Wn-8z4uPNoU3QIOOIOuq8sjQ&usqp=CAEx" },
  { id: 4, name: "Khaki Chinos", price: 1499, color: "Khaki", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQP2AQRo6iwe0jjmpbClPw6bhwYbVzzLNOpj7i6VaaGlkv_pftr-zVHGFrkyohRCeiFPQ4pMICrXYpz_azn1fvSn6QPgryehNEO2d3B9BYoR0qZdSG_9fWw&usqp=CAE" },
  { id: 5, name: "Regular Fit Trousers", price: 1099, color: "Navy", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzpxLRaEa5Wv2XNa2EJ6Hp6mC4Kjqjpi2OxnHPFiC-b7vTg4yQ2KcoTzpIh7pZOys1UGH1qaNhnGSznx9cfzBKxU1ur9UKKDZTI-Iiqomx_B6rDdCBlNqslg&usqp=CAE" },
  { id: 6, name: "Stretchable Trousers", price: 1599, color: "Beige", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSl1XRhB8x_XO0cyaJyGKyFyLPDIEuEwqSGfpmoil_MKy8qD5zRoB3bU3s_oBXbXIx0nZIMq90j3fcIJzS8Fdi7SpbKfZSTbj-US7ngYmvNv-R4DuTvbm6Z&usqp=CAE" },
  { id: 7, name: "Black Cargo Pants", price: 1699, color: "Black", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTEadJVE1Fa3nJ64QDMFClVGNNZe12TnsVZMsJ6hqSwpWrTNZY8BNRTpYTV_iLvs70qKBE55XwmsdgTnvWFocT5AWkFr7m_aMFO5hy3DGgBEfGtve4Z2cVwxQ&usqp=CAE" },
  { id: 8, name: "White Linen Trousers", price: 1399, color: "White", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqTRl64MY-nPfpaw6cIJ5eJV76UnhSvkSendq6sSbeV1pWFXzUsLYEJhFnnBkkcnSBrmrVxRa92eSCE1il0M3TQLzerMH089DR5WdhO-r4&usqp=CAE" },
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
