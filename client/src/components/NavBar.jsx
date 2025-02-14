import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NAVBAR_ITEMS = [
  { icon: "🏠", text: "Home", path: "/" },
  { icon: "🛒", text: "Cart", path: "/cart" },
  { icon: "🔍", text: "Search", path: "/search" },
  { icon: "👤", text: "Profile", path: "/profile" },
];

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        {NAVBAR_ITEMS.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }) => "item" + (isActive ? " active" : "")}
          >
            <div className="icon">{item.icon}</div>
            <div className="text">{item.text}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
