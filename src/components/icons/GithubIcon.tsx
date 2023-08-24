import React from "react";

import github from "../../assets/images/github-full-svgrepo-com.svg";

interface GithubIconProps {
  className?: string;
}

const GithubIcon: React.FC<GithubIconProps> = ({ className }) => {
  return (
    <img
      className={`h-10 object-cover ${className}`}
      src={github}
      alt="Github Text Logo"
    />
  );
};

export default GithubIcon;
