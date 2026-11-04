import { NavLink } from "react-router-dom";
import "../form.css";

export default function AuthToggle() {
  return (
    <nav className="tab-container">
      <NavLink
        to="/"
        className={({ isActive }) => `tab-item ${isActive ? "active" : ""}`}
      >
        Masuk
      </NavLink>
      <NavLink
        to="/daftar"
        className={({ isActive }) => `tab-item ${isActive ? "active" : ""}`}
      >
        Daftar Usaha
      </NavLink>
    </nav>
  );
}