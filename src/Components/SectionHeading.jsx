const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="w-full text-center">
      <h2 className="heading2 heading">{heading}</h2>
      <p className="sub-heading-1">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
