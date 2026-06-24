import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./styles/global.css";

import { useReveal } from "./hooks/useReveal";
import { useCrosshair } from "./hooks/useCrosshair";

import Lenis from "@studio-freight/lenis";

import SheetFrame from "./components/SheetFrame";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StartecIntelligent from "./pages/StartecIntelligent";
import SiConnect from "./pages/SiConnect";
import Press from "./pages/Press";
import FleetManagement from "./pages/FleetManagement";
import OutcomeDetails from "./components/ProjectDetails/OutcomeDetails";

function ScrollToHash({ lenisRef }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = setTimeout(() => {
      const el = document.querySelector(hash);
      if (!el) return;
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(el, { offset: -80, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 120);
    return () => clearTimeout(id);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  useReveal();
  useCrosshair();

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div>
      <ScrollToHash lenisRef={lenisRef} />
      <Navbar lenisRef={lenisRef} /> {/* ← pass ref */}
      <SheetFrame />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/startec-intelligent" element={<StartecIntelligent />} />
          <Route path="/si-connect" element={<SiConnect />} />
          <Route path="/outcome" element={<OutcomeDetails />} />
          <Route path="/fleet-management" element={<FleetManagement />} />
          <Route path="/press" element={<Press />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
