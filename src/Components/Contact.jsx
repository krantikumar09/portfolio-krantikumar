import FormContact from "./FormContact";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  return (
    <section id="contact" className="contact mt-32">
      <SectionHeading
        heading="Contact Me"
        subHeading="Let's start the project!"
      />      

      <FormContact/>
    </section>
  );
};

export default Contact;
