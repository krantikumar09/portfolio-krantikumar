import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

const Footer = () => {
  const socialLinks = [
    {
      link: "https://github.com/krantikuar09",
      icon: faGithub,
    },
    {
      link: "https://www.linkedin.com/in/krantikumar-mathapati-89b758244/",
      icon: faLinkedin,
    },
    {
      link: "https://twitter.com",
      icon: faTwitter,
    },
  ];

  const navItems = [
    {
      label: "Home",
      link: "#home",
      class: "footer-text"
    },
    {
      label: "About Me",
      link: "#about",
      class: "footer-text"
    },
    {
      label: "Tech Stack",
      link: "#techStack",
      class: "footer-text"
    },
    {
      label: "Projects",
      link: "#projects",
      class: "footer-text"
    },
    {
      label: "Contact",
      link: "#contact",
      class: "footer-text"
    },
  ];

  return (
    <footer className="mt-36 max-w-screen-2 w-full max-auto px-4 pb-4">
      <section className="footer-rows">
        <a href="/" className="logo">
          <img src={assets.logo_footer} width={80} alt="logo" />
        </a>

        <div>
          <div className="social-icons">
            {socialLinks.map((item, _) => (
              <a href={item.link} key={_}>
                <FontAwesomeIcon
                  icon={item.icon}
                  size="1x"
                  className="social-icons-icon"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="footer-rows flex-col sm:flex-row">
        <ul className="footer-nav-link-row">
          {
            navItems.map((item, index) => (
              <li key={index}>
                <a className={item.class} href={item.link}>{item.label}</a>
              </li>
            ))
          }
        </ul>

        <p className="footer-text">Developed by <span className="bg-custom-gradient">Krantikumar</span> with ❤️</p>
      </section>
    </footer>
  );
};

export default Footer;
