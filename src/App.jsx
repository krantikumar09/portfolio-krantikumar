import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./output.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ThemeToggle from "/src/Components/ThemeToggle";

// register gsap
gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 85%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <Home />
      <Footer />
      <ThemeToggle />
    </ReactLenis>
  );
}

export default App;
