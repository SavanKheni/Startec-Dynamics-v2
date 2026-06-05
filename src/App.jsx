import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";

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

export default function App() {
  useReveal();
  useCrosshair();

  const lenisRef = useRef(null);

  // ✅ Lenis setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08, // 🔥 smoother & stable
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <SheetFrame />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
