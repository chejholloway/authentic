import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "@material-tailwind/react";

import Follower from "../../types/Follower";
import { GrayText, Title } from "./FollowersList.styles"

interface FollowersListProps {
  followers: Follower[] | undefined;
}

const FollowersList: React.FC<FollowersListProps> = ({ followers }) => {
  return (
    <GrayText>
      <Title>
        <Typography className="font-normal">Followers</Typography>
      </Title>
      <div className="flex flex-wrap space-x-4">
        {followers ? (
          followers.map((follower) => (
            <div key={follower.id}>
              <Link to={follower?.html_url}>
                <Avatar
                  variant="circular"
                  title={`${follower?.login}'s Avatar`}
                  alt={follower?.login}
                  src={follower?.avatar_url}
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No followers available.</p>
        )}
      </div>
    </GrayText>
  );
};

export default FollowersList;
