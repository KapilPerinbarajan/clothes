import React, { useState } from "react";
import "./roundpage.css";

const roundProducts = [
  { id: 1, name: "Classic Round T-Shirt", price: 799, color: "Red", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzMmeqYNGI-mfloGin2Zqi1nJMeFeJCO9NnRm4Mxl0Kqgun-4GMqJcF-XW9UMjQTeQqMoK5emR-Dp-5xum3U7HLfrR6kwQbh5i77U5VHU9-66RdRvL5M0N&usqp=CAE" },
  { id: 2, name: "Striped Round T-Shirt", price: 899, color: "White", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSoufyXLrTyO6BdUOvyTEy5NpAQR6K_RXUuIhio4jJDEZljhOtuv5pQDyRXx6_f6A0mxxh1anxcNg8YbtKtyMLspqV_nEzRdAHuFMc7JAAw&usqp=CAE" },
  { id: 3, name: "Navy Blue Round T-Shirt", price: 999, color: "Navy Blue", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQByOFWZ90bRxrFZxMxIUfiqPYD1TY5FlJ93jztmxw-E1LWEG4Xgqod_W3_lytFm-LtLuxl96UoxbltervO2_oR8rGBHixqOX2eyC4gVlg&usqp=CAE" },
  { id: 4, name: "White Round T-Shirt", price: 749, color: "White", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcHW9s4Y4SsLXYbNvvEayXS5Y8A5UHnGfKEdjnHbUuCkuFfbCVFTq5kkG14TDbDu8BuD161k-gHo9cyVz2qTo3NpJ4ZrvsTUwPTLEIYmPGha0AuTr57ylq&usqp=CAE" },
  { id: 5, name: "Black Round T-Shirt", price: 849, color: "Black", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS36lEkFwLq1cpx9arPLSF2KmyVMtN8rG3_ONx6lnWFg25SZANz8_pSNjVM_pGetbR4wYFtbifZpdWlGEgyJ3OpA1Wi-Crz9wNBOop73cNRV6TyZgmyQACu&usqp=CAE" },
  { id: 6, name: "Red Round T-Shirt", price: 699, color: "Pink", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdIwXErsPoCTWfEZPCjt2-YnLx_bLrAa3MJ0ASOmPS32apttaglJ_V6BIJrNN8oG8QUdBdqg4kam5JB34MkWyrRf2B_mX3xM04QU4OXp9e4IwXuygpG5XS2w&usqp=CAE" },
  { id: 7, name: "Green Round T-Shirt", price: 799, color: "Green", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAEJoOqa5iWyulpoM-ml2N0I6UCjA27tl_F_r-K3m15yOdKFV4mkJaEKNMaMjXH7viO2P8tLlKP8-L3Fq10Uu2rOKZsNLtAX4apiFyfFxE&usqp=CAE" },
  { id: 8, name: "Yellow Round T-Shirt", price: 899, color: "Yellow", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5kWnxiJouTqv62J1Ds-OC0V1PcSbigj4LiV6rnJ2gpSPeaPK3hhS_qGG3IepVA8yjOgG8KwdVkEIABSh5Ztki1DQJLasRw--jN7HmSsSEEBKwwxPAs3E8&usqp=CAE" },
  { id: 9, name: "Printed Round T-Shirt", price: 999, color: "Blue", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3KO7qZlJGFE22cd1EToXU9QyxGhFPD9XIiKWYVv80z1zuCfMqR3Qg90lctGqTrOiWSTYXtMf8854hJcpAIZ4WwbYLArsq8TkcEBrnnA8&usqp=CAE" },
  { id: 10, name: "Printed Round T-Shirt", price: 1099, color: "Red", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmP86wQHyPUF2g3n7un90nrGAorx96MoeT3B5YyN8qeinVwlNyVYsY6RCWC4nD6NB6nxgoQ-2uRzbCCMmQyoa17bS1LLdk7BTx2VG7R5V9G4OSoOg85adkJQ&usqp=CAE" },
  { id: 11, name: "Printed Round T-Shirt", price: 1099, color: "White", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQMv2wx_Zg1m6wDxyTWGJt34LI9uI7CiztafVuXZvyQ3XVIfjOsovrOFOu4p9NODS5xJdlpb4NH8Z26MjRA4f5eJMXgiOqrfWBWDRd43w3-dr-SiXOuzBMa&usqp=CAE" },
  { id: 12, name: "Printed Round T-Shirt", price: 1099, color: "Black", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnOMgLqexdA2px89V1pCcKUNnXfxXVVyt7abBePbKlimEtxqu2vNdj6ghhgoLEHIRQL2J3XIKsArWP0xlB2oiVJTL54Rfkq6U32uAbIyjIRMAqyw0l6FpfmQ&usqp=CAE"}
];

const RoundPage = () => {
  const [cart, setCart] = useState({});

  const handleSelection = (id, field, value) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { ...prevCart[id], [field]: value },
    }));
  };

  return (
    <div className="round-page">
      <h2>Round Neck T-Shirts</h2>
      <div className="product-grid">
        {roundProducts.map((product) => (
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

export default RoundPage;
