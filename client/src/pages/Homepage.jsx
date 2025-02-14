import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Slideshow.css";
import "../Categories.css";
import "../BestSellers.css";

const images = [
  "https://t4.ftcdn.net/jpg/07/63/26/85/360_F_763268538_sk7wNf87lh0ioZMnAnLBOBlf1unB2RNi.jpg",
  "https://cottonking.com/cdn/shop/collections/All_Shirts.jpg?v=1707411161",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2gfiWgwwHQWrcKgWX3nw4X2bZ5t5xCV2pw&s",
  "https://fabriclore.com/cdn/shop/articles/Blog-Banner.jpg?v=1673845503&width=1200",
];

const categories = [
  { name: "Polo T-Shirts", icon: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJc0dnBnEmO0Ca2gHYZeGWYFTEiDTr9Blh22Y4cZqJWHZyXdi-HwC6VGTxZvY1y7uC8zdn6QG1rIGgPVRDxZIslYIzg2W5y1Tuq-yXE2--gmCe7VtayhaLuKxELVMXXP_0JdLoQw&usqp=CAc", textcolor :"black",path: "/polo" },
  { name: "Round Neck T-Shirts", icon: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTZX6yGfeDZF7I7d59OJonR_Ugh2gV5iv5DQTcBXgfbyV_dCPuN1vatxMZRAEtvbS6fhxY7HTGxHpKX6z687-pwIlsWIm7q1CkyqCJBaY3-iNny3YTbyzYfbSwMkirnA00Q8lu6A&usqp=CAc",textcolor :"black", path: "/round" },
  { name: "Shirts", icon: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ7zHani16eomFRZEgwrAGwZ8cwmLJyPAb0pojJsQFTpK3orb-d7aZDilkGx747ZcVaUjABflosGBj4LAcQPW800G7iPYCZeE6CoqK8F-OKqTA1V3Ap4QdexA", textcolor :"black", path: "/shirts" },
  { name: 'Sweat Shirts', icon: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNXoidnjo-IORzFEJ_v74MEjC4ShLv6B9dQjJHcRgRZmIBYaGG7WD1NJelZtWl0g3sbOF6GWUdYHFlbqQtXxytRSOR38AaWcpvWhXCRpILAmKthdLhrO1dJTk&usqp=CAE", textcolor :"black",path: "/sweatshirts" },
  { name: 'Trousers', icon: 'https://image.hm.com/assets/hm/b0/43/b043f0f0eeaba1bcf1ea0d7937bfe6bd48925a05.jpg?imwidth=396', textcolor :"black",path: "/trousers" },
  { name: 'Shorts', icon: 'https://image.hm.com/assets/hm/0f/88/0f88b5de0e3d346f47acf4a549f9783fccbe6695.jpg?imwidth=1260', textcolor :"black",path: "/shorts" },
  { name: 'Lounge Wear', icon: 'https://image.hm.com/assets/hm/bf/a5/bfa52eaad4cdde9346a166b456abc3a39dcb764e.jpg?imwidth=1260', textcolor :"black",path: "/loungewear" }, 
  { name: 'Vest', icon: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR5teXHsfJBxLJHYIZOebsDU4eIleH6BerMSLjyGofDYacgKb0LRghSZQSLMrFq6ZcK45kdXPYK0mTskmhSHfH3j1NzfBLJKed7aLKGsK8LLgM_wvMrT7yoU34&usqp=CAE', textcolor :"black",path: "/vest" },
];

const bestSellers = [
  { name: "Men's Polyester Grey Shorts", price: 799, image: "https://classicpolos.com/cdn/shop/products/4_cfe70a7f-d733-4d1b-a0bb-3c109ed409a6.jpg?v=1735304211&width=360" ,path: "/shorts"},
  { name: "Men's Polyester Light Track Pants", price: 899, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRwe10zJnynDpAiJHiZdYUAl4jGonuP49bdx4y9SMm4Qh56LcKGdBgqDMPqytlb1tdqFm44QampDrwMeO1jVRdGkda6LppHyrKQTWLdqFdwPD5IvW-xIx4IQA",path : "/loungewear" },
  { name: " Men's T-Shirt", price: 854, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtMrv1xLdD3KeM2pw9UmgkEYa5aoX4mLtgR_10Y_62mrOfDjfEd1Zom-4LOF0Ivvy4P5DMbNSz2e9bXNbexdbsfJiPRCN7u1y_G_ndFT4w4qAxc6zaE1NP&usqp=CAE",path: "/shirts" },
  { name: "pants", price: 599, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSG64mehYEKYOFeZBpPWD9A6nOP2GmlL0Ei6vZ6744rGGLw30kG7yOCbQaz1Hmmf3bUzAbt18SDhZ07Kqc8ywzbk5LiR0Hj71JlbWggwGGRk1YvHa26jiwvFw&usqp=CAc",path: "/trousers" },
  { name: "T-shirts", price: 499, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxK7luL2q6RAU18j6oSPrIH-xCduE1TpLRJZ52u-IgJF6qX-WTtvd-SuX4zmbu-IGQ7xjVa9FqC3j_8NzRI0G-315xKfKZ8zFHjwlujHVpKUZyXuBjTdM4&usqp=CAE",path: "/polo" },
];


const HomePage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="slideshow-container" style={{ marginBottom: "80px" }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Categories Section */}
      <div className="categories-container">
        <h2 style={{ color: "white" }}>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => navigate(category.path)}
              style={{ cursor: "pointer" }}
            >
              <img src={category.icon} alt={category.name} className="category-icon" />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Best Sellers Section */}
      <div className="bestsellers-section">
        <h2>Best Sellers</h2>
        <div className="horizontal-scroll"
        >
          {bestSellers.map((product, index) => (
            <div key={index} 
            className="bestseller-card" 
            onClick={() => navigate(product.path)}
            style={{ cursor: "pointer" }}
>
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-title">{product.name}</p>
              <p className="product-price">Rs. {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default HomePage;
