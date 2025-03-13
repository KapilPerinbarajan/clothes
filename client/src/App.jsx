import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Homepage";
import CartPage from "./pages/cartpage";
import SearchPage from "./pages/Searchpage";
import ProfilePage from "./pages/Profilepage";
import CategoryPage from "./pages/CategoryPage";
import PoloPage from "./pages/PoloPage";
import RoundPage from "./pages/RoundPage";
import ShirtsPage from "./pages/ShirtPage";
import SweatshirtPage from "./pages/SweatshirtPage";
import TrousersPage from "./pages/TrousersPage";
import LoungePage from "./pages/LoungePage";
import VestPage from "./pages/VestPage";
import ShortsPage from "./pages/ShortsPage";
import PaymentPage from "./pages/PaymentPage"; // ✅ Added Payment Page

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} /> {/* ✅ Added Payment Route */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/polo" element={<PoloPage />} />
            <Route path="/round" element={<RoundPage />} />
            <Route path="/shirts" element={<ShirtsPage />} />
            <Route path="/sweatshirts" element={<SweatshirtPage />} />
            <Route path="/trousers" element={<TrousersPage />} />
            <Route path="/loungewear" element={<LoungePage />} />
            <Route path="/vest" element={<VestPage />} />
            <Route path="/shorts" element={<ShortsPage />} />
            <Route path="/:category" element={<CategoryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
