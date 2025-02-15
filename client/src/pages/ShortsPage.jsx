import React, { useState } from "react";
import "./shortspage.css"; // Ensure the CSS file exists

const shortsProducts = [
  { id: 1, name: "Casual Cotton Shorts", price: 799, color: "Black", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_MCKHE6xCOMyWSBBE386Nhl0u2iOOjFxi5zz4yX3fHEOmMm6loEAZLieadxoBCiRz15YdEnFIoV4fGVeZGq5ZxcrZ2uWdk9h4YOCrsww&usqp=CAE" },
  { id: 2, name: "Denim Blue Shorts", price: 899, color: "Blue", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRl2xycY9c5euowsVxEkLAGh-Ofl8cED6bMvoOqdIoN5tF8bPnGqw3eudFYyNQtWWeQLTzNXfFrL7ZiIB_DCj_Eve-Soiw5n6hISLAdB_xkWZMrc5pT4cqg&usqp=CAE" },
  { id: 3, name: "Athletic Grey Shorts", price: 749, color: "Grey", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1ky4gHug5fo8x9DafYk6kAy8ayQorDXavp38LiwOUGjARkQTalnh_L-HUcHWVnoNYz3TOdezWbLVpFLzTaDF6lA_fWybsUGpgb64xmAY&usqp=CAE" },
  { id: 4, name: "Khaki Cargo Shorts", price: 999, color: "Khaki", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRfC6dcjxb5i2Kto-Cq0O6f6RD9qN7JqNknagcOs2JJiNCDSCkPeEzZcfHIBMQwOKBnJ2feb0Xj8T4CwEvj2H_-ljIW04AdBtMjJ6gy7PGZ7c4Sj-NZ4a3&usqp=CAE" },
  { id: 5, name: "Relaxed Fit Navy Shorts", price: 849, color: "Navy", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSV9Vet7tLcapU4OUej9iVWwkftHwaN5_2huK0o2FmXNMnYT4v7AUx4Yn74jvUpDCxkUvaWYYSY9UCHk4PEwtzFq6TWEOp2Oejq3uhf_ljhB82lHOMtzv7whg&usqp=CAE" },
  { id: 6, name: "Linen Beige Shorts", price: 1099, color: "Beige", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKu-cgmyzxGSEGpqQPZLFp7E7HxapDlxJFzfRZ3flER6mUU01YyftxHOLJpVvWdewSy4Ds9Eb_tkZiJjZqO9IUpkVFHSgsDf02VfUbANb2VvM47u-A8LF5UA&usqp=CAE" },
  { id: 7, name: "White Summer Shorts", price: 799, color: "White", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRSCXmfgSLGGLV-mng3Vgj7ldLyX3zlVEERh0QRTFkueSquVkLze6eJ9-FUEI_FVlNp92phIrfrWNxRc4x-JCpASd16Kq1mP4CJ-SAtJ1QydZmU7fpUwS2c&usqp=CAE" },
  { id: 8, name: "Stretchable Black Gym Shorts", price: 899, color: "Black", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSVhB-qb7QKCB_HMiUGAINDaPuH7ewU_X7G7SWahlGW4hSlYp_G_Tp90RZCMRQCaC5-eqS7qJyRZF8XS31ktvm8lW8Lz1GR639Sx0GgYARPNR5uaRAexxzz&usqp=CAE" },
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
