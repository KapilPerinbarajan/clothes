import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/Searchpage";
import ProfilePage from "./pages/Profilepage";
import CategoryPage from "./pages/CategoryPage"; // Handles category navigation
import PoloPage from "./pages/PoloPage";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/polo" element={<PoloPage />} />

            <Route path="/:category" element={<CategoryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
