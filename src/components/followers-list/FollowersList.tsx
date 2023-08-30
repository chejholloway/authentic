import React from "react";
import Follower from "../../types/Follower";
import FollowerCard from "../cards/FollowerCard";
import GenericList from "../generic-list/GenericList";

interface FollowersListProps {
  followers: Follower[] | undefined;
}

const FollowersList: React.FC<FollowersListProps> = ({ followers }) => {
  const mapToLink = (follower: Follower) => follower.html_url;
  const renderItem = (follower: Follower) => (
    <FollowerCard follower={follower} />
  );
  const renderCard = (follower: Follower) => (
    <FollowerCard follower={follower} />
  );

  return (
    <GenericList
      title="Followers"
      data={followers}
      renderItem={renderItem}
      emptyMessage="No followers available."
      mapToLink={mapToLink}
      renderCard={renderCard}
    />
  );
};

export default FollowersList;
