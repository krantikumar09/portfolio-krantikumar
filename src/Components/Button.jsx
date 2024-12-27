import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const PrimaryButton = ({ href, target="_self", label, icon, classes, download }) => {
  if (href) {
    return (
      <button className={"btn primary-btn " + classes}>
        <a href={href} target={target} download={download}>
          {label} {icon ? <FontAwesomeIcon icon={icon} /> : undefined}
        </a>
      </button>
    );
  } else {
    return (
      <button className={"btn primary-btn " + classes}>
        {label} {icon ? <FontAwesomeIcon icon={icon} /> : undefined}
      </button>
    );
  }
};

const OutlineButton = ({ href, target= "_self", label, icon, classes }) => {
    if (href) {
      return (
        <button className={"btn outline-btn " + classes}>
          <a href={href} target={target}>
            {label} {icon ? <FontAwesomeIcon icon={icon} /> : undefined}
          </a>
        </button>
      );
    } else {
      return (
        <button className={"btn outline-btn " + classes}>
          {label} {icon ? <FontAwesomeIcon icon={icon} /> : undefined}
        </button>
      );
    }
  };

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

OutlineButton.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
  };

export { PrimaryButton, OutlineButton };
