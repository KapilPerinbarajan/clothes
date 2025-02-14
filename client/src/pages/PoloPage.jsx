import React, { useState } from "react";
import "./polopage.css";

const poloProducts = [
  { id: 1, name: "Classic Polo T-Shirt", price: 799, color: "Red", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSUhmYPjtYjcSfFWyOJDWtqDs9nZvy-VVRodw8r-nwXvwfrRzpcEUDov82yjRSECl9DEQi_63cGKVcKNg9Oorln3PbFyWhcDlIkXs-7L-vf3fwqTU_Rvpw2&usqp=CAE" },
  { id: 2, name: "Striped Polo T-Shirt", price: 899, color: "White", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTvemt7fuQUXY-CNwecW7c7mcMsoP_kheiEYAusnoCo6qzWj7DlDGplEp4crfyWyoehvyRdgCJnmjYyEWumJkluuBnKx2fGYaOauXfS1cU3NwCCIvG5FI3GA&usqp=CAE" },
  { id: 3, name: "Navy Blue Polo T-Shirt", price: 999, color: "Navy Blue", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQp8zFzE0dS49rkyomQou2IRgO0rM-N7dDytSYn0DtorUJvsaT47GXg7JHY7RWfplu8Z_VTr-OYHcWtpLmItJrYgENRzOMZgTfxPRGG2gNnU0XfVuNL_93a3w&usqp=CAE" },
  { id: 4, name: "White Polo T-Shirt", price: 749, color: "White", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRL5TFbJvgxfuWio6NlqzziZss6H7EM_I8Lmjhp4jWMiUv1fSfOxFG0IPqRgvXJJD9ZZK6Oq80PJtKNEhtZj2NnCw81ExBA8A&usqp=CAE" },
  { id: 5, name: "Black Polo T-Shirt", price: 849, color: "Black", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSV870RHmznHttPd-ErMcgbDYNkkPWO51U_eLCIgzhOYrz1PY_4BnBxgUgbnhWmGcfPGCYobeijBx1iDxnd2sQeqA7c8c7D7y3uqFALjpDGRPcpBxpVZEHHjg&usqp=CAE" },
  { id: 6, name: "Red Polo T-Shirt", price: 699, color: "pink", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuC8NbV8Lt0DHClHu0GSZ2vVgYJg0euVcKFXjZeyWHG9x1Ad_wjh4A1UqRoOCLg_lzWZMaLByGnI-r6mxyAmj6OYQhvF2uTLOGef7Nr9jgJaK-N9ieEh9z&usqp=CAE" },
  { id: 7, name: "Green Polo T-Shirt", price: 799, color: "Green", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIYmLAs1QPQkX3PDWUfNH_ZvII5yIdCF6N175vhbgiKLhgZzd2BLEDFVfW4nT3t_N4iX5H_hfOHOcA97W0KdXHxn1XYQz0NrUJCnDgkcNHw7HknMhviATp&usqp=CAE" },
  { id: 8, name: "Yellow Polo T-Shirt", price: 899, color: "Yellow", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYh5-B5jSRtisyddEnrB1fH02hBF-ttAdNQ&s" },
  { id: 9, name: "Printed polo t shirts", price: 999, color: "Blue", image: "https://www.indianterrain.com/cdn/shop/files/ITMTS01443SS-Dark-Teal_01_a3bf9e42-691d-422e-97b0-52caacf2650f.jpg?v=1718108667&width=1000" },
  { id: 10, name: "Printed polo t shirts", price: 1099, color: "Blue", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQNTn3HKzWCsk_wzvORhxELEQpbtEjMnLAA&s" },
  { id: 11, name: "Printed polo t shirts", price: 1099, color: "Red", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSpGsw1cDlh5zBcdVzb931kQ_qzadakmfDAx7h9_p6NNJmF5qhD2aU8lW_Y-sg3uk9bH8WWm9QEfo9Si7xCHv6CwI3j-QVTH8XOq_32FhpZ&usqp=CAE" },
  { id: 12, name: "Printed polo t shirts", price: 1099, color: "White", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYvY8RLOpU8nXyjOq9xbvHEO4yZuG87QSODZVANqg5IJLo9nSvw6GHKW1vL5JeUoqtg4&usqp=CAU" },

];

const PoloPage = () => {
  const [cart, setCart] = useState({});

  const handleSelection = (id, field, value) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], [field]: value },
    }));
  };

  return (
    <div className="polo-page">
      <h2>Polo T-Shirts</h2>
      <div className="product-grid">
        {poloProducts.map((product) => (
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

            <button onClick={() => console.log(cart)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoloPage;
