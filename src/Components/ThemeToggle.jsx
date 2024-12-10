import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-slate-50 text-black rounded-md"
    >
      {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    </button>
  );
};

export default ThemeToggle;
