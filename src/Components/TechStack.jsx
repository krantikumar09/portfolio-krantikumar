import { useContext } from "react";
import { techStack } from "../assets/assets";
import SectionHeading from "./SectionHeading";
import { ThemeContext } from "../Context/ThemeContext";

const TechStack = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="techStack" className="mt-32 scroll-mt-32">
      <SectionHeading
        heading="Tech Stack"
        subHeading=" Technologies I’ve been working with recently"
      />

      <div className="grid grid-cols-3 sm:grid-cols-6 justify-items-center gap-6 mt-16 reveal-up">
        {techStack.map((item, index) => (
          <img
            className="w-14 h-14 sm:w-20 sm:h-20"
            key={index}
            src={theme === "dark" ? item.dark : item.light}
            alt={`Logo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
