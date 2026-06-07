import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="wrap">
        <a href="/" className="brand">
          <img src={logo} alt="Startec Dynamics" />
        </a>

        <div className={`nlinks${menuOpen ? " open" : ""}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="/press" onClick={() => setMenuOpen(false)}>
            Press
          </a>
          <a href="/contact-us" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </div>

        <a href="#about" className="nbtn">
          START A PROJECT →
        </a>
        <span className="burger" onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? "CLOSE" : "MENU"}
        </span>
      </div>
    </nav>
  );
}
