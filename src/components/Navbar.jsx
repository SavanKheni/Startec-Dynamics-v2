import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="wrap">
        <a href="#top" className="brand">
          <span className="sq" />
          <b>STARTEC</b>DYNAMICS<span>R&amp;D</span>
        </a>

        <div className={`nlinks${menuOpen ? ' open' : ''}`}>
          <a href="#thesis" onClick={() => setMenuOpen(false)}>Thesis</a>
          <a href="#cap" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#method" onClick={() => setMenuOpen(false)}>Method</a>
          <a href="#arc" onClick={() => setMenuOpen(false)}>Trajectory</a>
          <a href="#files" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="startec-about.html">About</a>
          <a href="startec-press.html">Press</a>
        </div>

        <a href="#about" className="nbtn">START A PROJECT →</a>
        <span className="burger" onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? 'CLOSE' : 'MENU'}
        </span>
      </div>
    </nav>
  );
}
