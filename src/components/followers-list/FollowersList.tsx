import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";

import Follower from "../../types/Follower";
import { GrayText, Title } from "../../styles/TwinStyles.styles";

interface FollowersListProps {
  followers: Follower[] | undefined;
}

const FollowersList: React.FC<FollowersListProps> = ({ followers }) => {
  return (
    <GrayText>
      <Title className="font-normal">Followers</Title>
      <div className="flex flex-wrap space-x-4">
        {followers ? (
          followers.map((follower) => (
            <div key={follower.id} className="m-4">
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
