import React, { useState } from "react";
import Page from "../components/Page";
import "./searchpage.css";

const dummyProducts = [
    { name: "Black Cotton T-Shirt", price: 599, image: "https://via.placeholder.com/150" },
    { name: "Slim Fit Jeans", price: 1299, image: "https://via.placeholder.com/150" },
    { name: "Sneakers", price: 1999, image: "https://via.placeholder.com/150" },
    { name: "Formal Shirt", price: 999, image: "https://via.placeholder.com/150" },
];

function Searchpage() {
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState(dummyProducts);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);

        const filtered = dummyProducts.filter(product =>
            product.name.toLowerCase().includes(value)
        );
        setFilteredResults(filtered);
    };

    return (
        <Page>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={query}
                    onChange={handleSearch}
                    className="search-input"
                />
                <div className="search-results">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((product, index) => (
                            <div key={index} className="search-card">
                                <img src={product.image} alt={product.name} className="search-image" />
                                <div className="search-info">
                                    <p className="search-title">{product.name}</p>
                                    <p className="search-price">Rs. {product.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No products found</p>
                    )}
                </div>
            </div>
        </Page>
    );
}

export default Searchpage;
