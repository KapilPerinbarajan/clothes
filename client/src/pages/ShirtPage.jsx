import React, { useState } from "react";
import "./shirtpage.css";

const shirtProducts = [
  { id: 1, name: "Classic Shirt", price: 999, color: "Red", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrtIlt5kr5vevjdLw8WPfiRlMJxX2cUK0NEaC6jMuG6LcjEVTD9Bs2rPC3JeLGF8X0FFE0tmOnez2RzCqkmFm0X6gfqBci-8_cRleien5n7nbUfCgaO43_8A&usqp=CAE" },
  { id: 2, name: "Striped Shirt", price: 1099, color: "White", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSySUZqpn05QnBAAECGo_6ZUvU4jI2eQo4mmiPFGyZH3So_5DGgS-hAlcOFgETm6yLGWLS101RuNDpxp5SiNvHNrEpk0LgNNPMan2d0ADzQ&usqp=CAE" },
  { id: 3, name: "Navy Blue Shirt", price: 1199, color: "Navy Blue", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7b1e8cq_qbVfruj6ov0KQhiTus9tT22qq0SjuTS0D_JVYoDflP7rWa1GkmnhP5vhPuUym0fRcmVk4x01qA95s3kBOdLPwtI-UVpESxdBXNCYnE1eBw9slOQ&usqp=CAE" },
  { id: 4, name: "White Shirt", price: 899, color: "White", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfHJuEiv97ngV45yanBYjufi1EcwJGCiFXWXBJQ4LfSN4rPyj1-BNFUo25VWBHmg9sFlp3KM4ovR9HztkG2KWMqbmYdoBhnV0vPV9CTS-VTybOgPecsYlq&usqp=CAE" },
  { id: 5, name: "Black Shirt", price: 949, color: "Black", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBjIZ_Nu5pRHVzlPwys_RgdMQVZsHFHonXluTzhsOj09FxjqJ0molu9lmgarRYL96bc2fULdEN1G6Nv1BlgNdgHDlnFloHbFIJfgR1NJ3oVC3gC_XiL7GA&usqp=CAE" },
  { id: 6, name: "Pink Shirt", price: 799, color: "Pink", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvLiIbeO8vPWs4iVHT0adtuD1ndsaTl769w6DzgqOJEE-BYGr2e4MJ_coCVxnE4FvjXeknDknja_aOeuulegs0zSR7OBi0ufkfTXTu-hd9&usqp=CAE" },
  { id: 7, name: "Green Shirt", price: 999, color: "Green", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSZpGjkEDu45FxR4VpPKtPfTvbGErRg8GYfxKJnTkMGHsqT4zqmTbPJlu_wvFGyq8FrCM812Xa8KSelMyAR0TTCm894s5Zux2E2YWRrWZCeFGSXccFq3iLaEw&usqp=CAE" },
  { id: 8, name: "Yellow Shirt", price: 1099, color: "Yellow", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQqYC_N9jIcnzd7TIOjSgYuzHB9xLsa9vga-W_sznChf2gk13uVZbycy0zKVWHuKjtmC1vTJxLicuCEcN7Cru_bwb8BIhIh9I1-W_cPBCaS76htPZAln9ii8w&usqp=CAE" },
  { id: 9, name: "Printed Shirt", price: 1299, color: "Blue", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSonzKOKJWeV6_XZ1gcilbCl_ug-T_Kw8qO-mx99b9xpEmBoivE085uAHlFEnYCWVjFwr8DIOHUBqbNwI0ALN4gnO-HPmGmxVaDWhiRLJ4cpEk-q7tW2Coq&usqp=CAE" },
  { id: 10, name: "Printed Shirt", price: 1399, color: "Red", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLWG-Os07Ve42znsx5flirP2yxH10EpvG03YUdXqFJqCPNvj-wwRP_EqcvStCZh_4IaHluTO-2waJ7EIJHi1laOsT0FFKGYH7A87XkucQ&usqp=CAE" },
  { id: 11, name: "Printed Shirt", price: 1399, color: "White", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTouyIPSnN4Q_OuwVFGokt-HcWsoxS9ViwfH7OxlvJveMMtcW_ErKdfib693hSoYJ2PpcRKwu8g8YCHScNjSzZFrRB-tXfq9vR5SkRlZP13&usqp=CAE" },
  { id: 12, name: "Printed Shirt", price: 1399, color: "Black", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsZatXiodYQY7KeZPbLDCWORNw2ugtkRa6RvAj6sZTk4uwvdTY4ruw1R3ky9iPMwgj-J2rqRUXnO4awPE601pBVJvg_P-O7NGapmicj_XL&usqp=CAE"}
];

const ShirtPage = () => {
  const [cart, setCart] = useState({});

  const handleSelection = (id, field, value) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], [field]: value },
    }));
  };

  return (
    <div className="shirt-page">
      <h2>Shirts Collection</h2>
      <div className="product-grid">
        {shirtProducts.map((product) => (
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

export default ShirtPage;
