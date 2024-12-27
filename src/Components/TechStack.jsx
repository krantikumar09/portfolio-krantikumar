import { techStack } from "../assets/assets";
import SectionHeading from "./SectionHeading";

const TechStack = () => {
  return (
    <section id="techStack" className="mt-32">
      <SectionHeading heading="Tech Stack" subHeading=" Technologies I’ve been working with recently"/>

      <div className="grid grid-cols-3 sm:grid-cols-6 justify-items-center gap-6 mt-16">
        {
            techStack.map((item, index) => (
                <img className="w-14 h-14 sm:w-20 sm:h-20" key={index} src={item} alt={item} />
            ))
        }
      </div>
    </section>
  );
};

export default TechStack;
