import Hero from "../Components/Hero";
import About from "../Components/About";
import TechStack from "../Components/TechStack";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div id="home" className="container mx-auto px-6">
      <Hero/>
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;
