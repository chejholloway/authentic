import React from "react";

import Follower from "../../types/Follower";
import ListCard from "../cards/ListCard";
import FollowerCard from "../cards/FollowerCard";
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
              <ListCard
                to={follower.html_url}
                item={follower}
                renderItem={(follower) => <FollowerCard follower={follower} />}
              />
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
