import React from "react";
import { Avatar, Typography, ListItemPrefix } from "@material-tailwind/react";

import Repo from "../../types/Repo";
import Developer from "../../types/Developer";

interface RepoCardProps {
  developer: Developer | undefined;
  repo: Repo;
}

const RepoCard: React.FC<RepoCardProps> = ({ developer, repo }) => {
  return (
    <>
      <ListItemPrefix>
        <Avatar
          variant="circular"
          alt={developer?.login}
          className="outline"
          src="/assets/images/git-svgrepo-com.svg"
        />
      </ListItemPrefix>
      <Typography
        variant="small"
        color="gray"
        className="font-normal text-xs text-gray"
      >
        {repo.name}
      </Typography>
    </>
  );
};

export default RepoCard;
