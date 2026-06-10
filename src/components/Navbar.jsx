import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const NAV_LINKS = {
  "/": [
    { href: "#thesis", label: "Thesis" },
    { href: "#cap", label: "Capabilities" },
    { href: "#method", label: "Method" },
    { href: "#arc", label: "Trajectory" },
    { href: "#files", label: "Projects" },
    { href: "/about-us", label: "About" },
    { href: "/press", label: "Press" },
  ],
  "/about-us": [
    { href: "#story", label: "Story" },
    { href: "#principles", label: "Principles" },
    { href: "#lab", label: "The Lab" },
    { href: "#team", label: "Team" },
  ],
  "/contact-us": [
    { href: "#form", label: "Message" },
    { href: "#routes", label: "Direct" },
    { href: "#find", label: "Find us" },
  ],
  "/startec-intelligent": [
    { href: "#overview", label: "Overview" },
    { href: "#cap", label: "Capabilities" },
    { href: "#system", label: "System" },
    { href: "#status", label: "Status" },
  ],
  "/press": [
    { href: "#featured", label: "Featured" },
    { href: "#coverage", label: "Coverage" },
    { href: "#kit", label: "Press Kit" },
  ],
};

const NAV_CTA = {
  "/": { href: "/contact-us", label: "CONTACT →" },
  "/about-us": { href: "/contact-us", label: "CONTACT →" },
  "/contact-us": { href: "#form", label: "START A MESSAGE →" },
  "/startec-intelligent": { href: "#contact", label: "TALK TO US →" },
  "/press": { href: "#kit", label: "MEDIA ENQUIRIES →" },
};

export default function Navbar({ lenisRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const links = NAV_LINKS[pathname] ?? NAV_LINKS["/"];
  const cta = NAV_CTA[pathname] ?? NAV_CTA["/"];

  function handleClick(e, href) {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target && lenisRef?.current) {
        lenisRef.current.scrollTo(target, { offset: -80, duration: 1.4 });
      }
    }
  }

  return (
    <nav>
      <div className="wrap">
        <a href="/" className="brand">
          <img src={logo} alt="Startec Dynamics" />
        </a>

        <div className={`nlinks${menuOpen ? " open" : ""}`}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={(e) => handleClick(e, href)}>
              {label}
            </a>
          ))}
        </div>

        <a
          href={cta.href}
          className="nbtn"
          onClick={(e) => handleClick(e, cta.href)}
        >
          {cta.label}
        </a>

        <span className="burger" onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? "CLOSE" : "MENU"}
        </span>
      </div>
    </nav>
  );
}
