import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "@material-tailwind/react";

import Follower from "../../types/Follower";

interface FollowersListProps {
  followers: Follower[] | undefined;
}

const FollowersList: React.FC<FollowersListProps> = ({ followers }) => {
  return (
    <div className="text-gray-700">
      <h3 className="text-center">
        <Typography className="font-normal">Followers</Typography>
      </h3>
      <div className="flex flex-wrap space-x-4">
        {followers ? (
          followers.map((follower) => (
            <div key={follower.id}>
              <Link to={"/"}>
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
    </div>
  );
};

export default FollowersList;
