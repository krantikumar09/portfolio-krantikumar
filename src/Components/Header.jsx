import React, { useState } from "react";
import { assets } from "../assets/assets";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 h-20 w-full flex items-center justify-between bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2 w-full max-auto px-4 flex items-center justify-between">
        <a href="/" className="logo">
          <img src={assets.logo} width={60} alt="logo" />
        </a>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden text-contentLight"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            {navOpen ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>

          <Navbar navOpen={navOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
