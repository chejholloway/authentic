import React from "react";

import HomeLink from "./home-link/HomeLink";
import NavbarIconContainer from "../navbar/navbar-icon-container/NavbarIconContainer";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 mb-8">
      <NavbarIconContainer />
      <div className="flex items-center space-x-5">
        <HomeLink />
      </div>
    </nav>
  );
};

export default Navbar;
