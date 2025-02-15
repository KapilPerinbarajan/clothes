import React, { useState } from "react";
import "./loungepage.css"; // Ensure the CSS file exists

const loungeProducts = [
  { id: 1, name: "Cotton Lounge Pants", price: 999, color: "Grey", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEKlNkk7q-RDi8hVQYYS-lUz2Voqnb8sma78Xt2X-iCxKVMI76vC_MAYfCsBmLArb-Me4IfG0FEjHX0WuaOtD0OkiLennx96qSD93_RsppgvjR6DAzBC_MAg&usqp=CAE" },
  { id: 2, name: "Soft Knit Lounge ", price: 799, color: "Black", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIbKHCak6JVWkLQu0NV-mbGZBEB_krMVa3GOdMmU7nTbxwXHghRh1A1SSMlsnlzecWaygAwlMVsnOstcG4hmaqcyDAdBPwWgOiDluoo_NahG3uM745e40b1A&usqp=CAE" },
  { id: 3, name: "Cozy Fleece Joggers", price: 1299, color: "Blue", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQvNYF_HkqS23UfOpi6Fq-oefMfYd4pbrbZ2IqQW2LjNhBEmg5G_CVVbcUSo3w7pEmZrDcZ_h_V4rOqk6arMSPuJBHCUw_xkypdwoUGqhVciuZPXvuIfvvJ&usqp=CAE" },
  { id: 4, name: "Relaxed Fit Pajamas", price: 1499, color: "White", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLBWP-KEGytmapxJy6keEhPanhNwAcGlPAZjrkh9pl5BNcGKERwv4EeAECoXsPV1qBKMEEYqYhWcDYouvtBzmtIXm5jYMQAsOnebYs6f5DYvVFuC946jpG-Q&usqp=CAE" },
  { id: 5, name: "Ultra-Soft Lounge Set", price: 1799, color: "Beige", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSicm1RaFphZ2V5RbkgiW8dQPJvSC1zh29TY2V7a_e7TUZKFuNaoTjJsRX7QXJ4fDN4_vD3dxscBBH0pSixIE0G-wKYxUW8d2cmGIO-7HDog6S4JDUuzM0DJg&usqp=CAE" },
  { id: 6, name: "Breathable Nightwear Pants", price: 1199, color: "Navy", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStAOZgn0CJ7s0CPL5EONH1i-M-VYzbDbwA7QRP9APQBfokdg6wVewyDzNwRQSBukqklZKMCD8rW2YJEHtrDwP4iOLWTHmH8zDjNBab-jib7Goe4PtfVUXsTw&usqp=CAE" },
  { id: 7, name: "Lightweight Home ", price: 699, color: "Brown", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSxeFJmPfp4TR6cAP5INxVYSWg6O8pKXJPJDxJypo5FMUsebbd88Fo8pu4I5XHsk1WQ3WuCrPXGRlIlfd072wEh7u9OJUbRKE8VKFAX1Q&usqp=CAE" },
  { id: 8, name: "Stretchable Lounge Pants", price: 1399, color: "Olive", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQAfX99eqdUxaCCGAD1D3LgOkxu3mZ65d8QgYjpQROghVzXWc_A2FGQfcHzX_zJJq4LclLHo2yz794bJf35yzm1AkpgZVqHKpGZF3jaxEo&usqp=CAE" },
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
