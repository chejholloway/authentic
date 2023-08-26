import React from "react";
import { Link } from "react-router-dom";

const HomeLink: React.FC = () => {
  return (
    <div className="flex items-center space-x-5">
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
