/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

interface AvatarLinkProps {
  developer: {
    login: string;
    avatar_url: string;
  };
}

const AvatarLink: React.FC<AvatarLinkProps> = ({ developer }) => {
  return (
    <Link to={`${process.env.REACT_APP_GITHUB_URL}/${developer.login}`}>
      <img
        className={`w-full mx-auto`}
        src={developer.avatar_url}
        alt="Avatar"
      />
    </Link>
  );
};

export default AvatarLink;
