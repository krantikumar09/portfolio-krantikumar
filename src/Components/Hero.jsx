import { faArrowDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrimaryButton, OutlineButton } from "./Button";

const Hero = () => {
  return (
    <section className="hero mt-[80px] h-[90vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="heading1 heading">
          Hi 👋, <br />
          I&apos;m{" "}
          <span className="bg-custom-gradient">Krantikumar Mathapati</span>
        </h1>
        
        <p className="sub-heading">Full Stack Web Developer Based in Pune</p>

        <div className="mt-12 flex items-center justify-center gap-[10px]">
          <PrimaryButton label="Download CV" icon={faDownload} />

          <OutlineButton href="#about" label="Scroll Down" icon={faArrowDown} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
