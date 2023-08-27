import React from "react";

import home from "../../assets/images/home.svg";

interface HomeIconProps {
  className?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ className }) => {
  return <img className={`${className}`} src={home} alt="Home Icon" width="24" />;
};

export default HomeIcon;
