import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="wrap">
        <a href="#top" className="brand">
          <span className="sq" />
          <b>STARTEC</b>DYNAMICS<span>R&amp;D</span>
        </a>

        <div className={`nlinks${menuOpen ? " open" : ""}`}>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Team
          </a>
          <a href="#">Partners</a>
          <a href="#">Press</a>
          <a href="#">Contact Us</a>
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
