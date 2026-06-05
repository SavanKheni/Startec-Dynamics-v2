import React from "react";
import Hero from "../components/Hero";
import Thesis from "../components/Thesis";
import Capabilities from "../components/Capabilities";
import Method from "../components/Method";
import Trajectory from "../components/Trajectory";
import Projects from "../components/Projects";
import FooterTopText from "../components/FooterTopText";

const Home = () => {
  return (
    <div>
      <Hero />
      <Thesis />
      <Capabilities />
      <Method />
      <Trajectory />
      <Projects />
      <FooterTopText />
    </div>
  );
};

export default Home;
