import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../icons/HomeIcon";

const HomeLink: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <Link
        to="/"
        className="text-black mr-4 hover:text-gray-400 transition duration-300"
      >
        <HomeIcon />
      </Link>
      <Link
        to="/"
        className="text-black mr-4 hover:text-gray-400 transition duration-300"
      >
        Home
      </Link>
    </div>
  );
};

export default HomeLink;
