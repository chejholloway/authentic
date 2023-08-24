import React from "react";
import { Link } from "react-router-dom";
import GithubIcon from "../../icons/GithubIcon";
import OctocatIcon from "../../icons/OctocatIcon";

const NavbarIconContainer: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="cursor-pointer">
        <div className="flex justify-center">
          <GithubIcon />
          <OctocatIcon />
        </div>
      </Link>
    </div>
  );
};

export default NavbarIconContainer;
