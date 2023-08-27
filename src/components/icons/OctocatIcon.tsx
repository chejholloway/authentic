import React from "react";

import octocat from "../../assets/images/github-octocat-svgrepo-com.svg";

interface OctocatIconProps {
  className?: string;
}

const OctocatIcon: React.FC<OctocatIconProps> = ({ className }) => {
  return (
    <img
      className={`h-10 object-cover ${className}`}
      src={octocat}
      alt="Octocat Icon"
    />
  );
};

export default OctocatIcon;
