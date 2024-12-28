import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-btn  ${
        theme === "light" ? "bg-card-light text-text-primary-light" : "bg-card-dark text-text-primary-dark"
      }`}
    >
      {theme === "light" ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>}
    </button>
  );
};

export default ThemeToggle;
