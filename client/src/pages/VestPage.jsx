import React, { useState } from "react";
import "./vestpage.css"; // Ensure the CSS file exists

const vestProducts = [
  { id: 1, name: "Classic White Vest", price: 299, color: "White", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThz8HB0KxQROSzXLFcI-Klq2ZOdlwKeQJoQn28Sh96uXOGZxDbyO7inGw651k8zxCpLsXl4tzn7uNu6qplowZgUyGBRJ20hfgp5HcQz5lukbf8svoTSiMF&usqp=CAE" },
  { id: 2, name: "Ribbed Black Vest", price: 499, color: "Black", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQp6Igd1lWGAt4bkY-AAhyBRWHDY6Ga5av_I80pl1eJCiCj3ACR5nWnyZf1r9HCTtPTWDm71OWhTcpr2n84JR3P3Wp4DxTHLK1t3fIBLOA&usqp=CAE" },
  { id: 3, name: "Athletic Grey Vest", price: 549, color: "Grey", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSEnS8xpyJ48-LwTQ6d92rjw8vtEw-vQTM7_Od9ppRnO8OCst_DLx8x0uwLauY49-0bTqoNmlCdohGicBoAxsSdLUcQN2XdjyZk4cg_txgCHqKiYoNwlSdgCw&usqp=CAE" },
  { id: 4, name: "Cotton Navy Vest", price: 699, color: "Navy", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSaCVZD-e0ArpMNo4NQyfCtyGRUYIoCEIj488v7BzXBGwzGMcQPxoihpyqQGfSML4v4Yklo5fBK_06YOF9A_qvu2xBd5yFj4f8DJ6ooSe_QEIDwcAz6H6oiqg&usqp=CAE " },
  { id: 5, name: "Sleeveless Beige Vest", price: 649, color: "Beige", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYKLPCB5d79s3CmWuSypwk_NvViQ7RWMRkiqrb2VgQdJtkQsCU3HA61aduXYKgFUqK2aaeb8huuCsAnaYSKHW6X7y7DXvgEcloC_JMT1ANDIsnPUsDr2ON&usqp=CAE" },
  { id: 6, name: "Fitted Olive Vest", price: 749, color: "Olive", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcDpR0lu-9GXA3lC-XygwWXTQ3phOoN4C5-0w8MqjO8Ve0S-OltI_YukTkJfmTU5nKKzdo0DuswdG5EC3XryE5Os_7pJiCUnbX2yjCuL4LadNXtZHf_rl_3Q&usqp=CAE" },
  { id: 7, name: "Casual Blue Vest", price: 599, color: "Blue", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5dYtJ4pI6AwzN2BZom6UdZWYAes2Y8V92w-qY-OwERFdIIs0UnOP36xYnOiZW7AtABAaWW7SBCL6vfNIC8s-VBQbGRecBJ5veK93zVWeAhvniyPAG282XTA&usqp=CAE" },
  { id: 8, name: "Relaxed Fit Brown Vest", price: 549, color: "Brown", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQX1BkYeKHjrGhPRVg-xEtQtM3zpVFMSVIMgCYyJml9d006mBSAYIdCkBdGixRPFjh898Oap3MfmILzJvG8KZtalOfEmAyoelLWWwzL-57d5nB0s6lP0aqD&usqp=CAE" },
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
