import { useEffect, useRef } from "react";
import PropeTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  }

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About Me",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Tech Stack",
      link: "#techStack",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "#projects",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link",
    },
  ];

  return (
    <nav className={"custom-navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a href={link} key={key} ref={ref} onClick={activeCurrentLink} className={className}>
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.PropeTypes = {
  navOpen: PropeTypes.bool.isRequired,
};

export default Navbar;
