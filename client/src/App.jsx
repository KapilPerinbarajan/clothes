import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Homepage";
import cartPage from "./pages/cartpage";
import SearchPage from "./pages/Searchpage";
import ProfilePage from "./pages/Profilepage";


function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const NAVBAR_ITEMS = [
    { icon: "🏠", text: "home", component: <HomePage /> },
    { icon: "🖼️", text: "cart", component: <cartpage /> },
    { icon: "🔍", text: "search", component: <SearchPage /> },
    { icon: "🤦", text: "Profile", component: <ProfilePage /> },
  ];

  const activePage = NAVBAR_ITEMS[activePageIndex].component;

  return (
    <div className="app">
      <NavBar ITEMS={NAVBAR_ITEMS} setActivePageIndex={setActivePageIndex} />
      <div className="main-container">
        {activePage}
      </div>
    </div>
  );
}

export default App;