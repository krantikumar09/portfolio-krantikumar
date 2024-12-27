import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

const About = () => {
  const eduction = [
    {
      course: "Master of Computer Application",
      insitute:
        "Dr. D. Y. Patil School of Science and Technology, Tathawade, Pune",
      type: "Full Time",
      duration: "Aug 2023 - Mar 2025",
    },
    {
      course: "Bachelor of Vocation (Computer Technology)",
      insitute: "Rajarshi Shahu Mahavidhyalaya, Latur",
      type: "Full Time",
      duration: "May 2020 - Aug 2023",
    },
  ];

  return (
    <section className="mt-32" id="about">
      <SectionHeading
        heading="About Me"
        subHeading="Technologies I’ve been working with recently"
      />

      <div className="mt-16">
        <div className="max-w-2xl w-full mx-auto">
          <p className="body-text mb-4">
            I create unique digital experiences tailored to your brand and
            goals. By merging creativity with functionality and staying ahead of
            design trends, I ensure every project not only looks stunning but
            also performs flawlessly.
          </p>

          <h3 className="heading3 heading mt-8 mb-4">Education</h3>

          {eduction.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.course}
              place={item.insitute}
              duration={item.duration}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
