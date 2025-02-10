import React, { useState, useEffect } from 'react';
import "../Slideshow.css";
import "../Categories.css";

const images = [
  'https://t4.ftcdn.net/jpg/07/63/26/85/360_F_763268538_sk7wNf87lh0ioZMnAnLBOBlf1unB2RNi.jpg',
  'https://cottonking.com/cdn/shop/collections/All_Shirts.jpg?v=1707411161',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2gfiWgwwHQWrcKgWX3nw4X2bZ5t5xCV2pw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI65NgSVnxq5aJmJoxi2JSVLsUaP4Gsx4U3Q&s'
];

const categories = [
  { name: 'Polo T-Shirts', icon: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJc0dnBnEmO0Ca2gHYZeGWYFTEiDTr9Blh22Y4cZqJWHZyXdi-HwC6VGTxZvY1y7uC8zdn6QG1rIGgPVRDxZIslYIzg2W5y1Tuq-yXE2--gmCe7VtayhaLuKxELVMXXP_0JdLoQw&usqp=CAc', textColor: 'black' },
  { name: 'Round Neck T-Shirts', icon: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTZX6yGfeDZF7I7d59OJonR_Ugh2gV5iv5DQTcBXgfbyV_dCPuN1vatxMZRAEtvbS6fhxY7HTGxHpKX6z687-pwIlsWIm7q1CkyqCJBaY3-iNny3YTbyzYfbSwMkirnA00Q8lu6A&usqp=CAc',textColor: 'black' },
  { name: 'Shirts', icon: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ7zHani16eomFRZEgwrAGwZ8cwmLJyPAb0pojJsQFTpK3orb-d7aZDilkGx747ZcVaUjABflosGBj4LAcQPW800G7iPYCZeE6CoqK8F-OKqTA1V3Ap4QdexA',textColor: 'black'  },
  { name: 'Sweat Shirts', icon: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNXoidnjo-IORzFEJ_v74MEjC4ShLv6B9dQjJHcRgRZmIBYaGG7WD1NJelZtWl0g3sbOF6GWUdYHFlbqQtXxytRSOR38AaWcpvWhXCRpILAmKthdLhrO1dJTk&usqp=CAE',textColor: 'black'  },
  { name: 'Trousers', icon: 'https://via.placeholder.com/80?text=Trousers' },
  { name: 'Collection', icon: 'https://via.placeholder.com/80?text=Collection' },
  { name: 'Lounge Wear', icon: 'https://via.placeholder.com/80?text=Lounge+Wear' },
  { name: 'Inner Wear', icon: 'https://via.placeholder.com/80?text=Inner+Wear' }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="slideshow-container" style={{ marginBottom: '80px' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
        <div className="navigation">
          <button className="nav-button prev" onClick={prevSlide}>&#10094;</button>
          <button className="nav-button next" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>

      <div className="categories-container">
        <h2 style={{ color: 'white' }}>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.icon} alt={category.name} className="category-icon" />
              <p style={{ color: category.textColor || 'inherit' }}>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
