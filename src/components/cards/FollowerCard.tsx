/* eslint no-unused-vars: "off" */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from "react";

import { Avatar } from "@material-tailwind/react";

import Follower from "../../types/Follower";

interface FollowerCardProps {
  follower: Follower;
}

const FollowerCard: React.FC<FollowerCardProps> = ({ follower }) => {
  return (
    <>
      <Avatar
        variant="circular"
        title={`${follower?.login}'s Avatar`}
        alt={follower?.login}
        src={follower?.avatar_url}
      />
      {follower.login}
    </>
  );
};

export default FollowerCard;
