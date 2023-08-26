import React from 'react';
import { Avatar } from '@material-tailwind/react';
import Follower from '../../types/Follower';
import List from '../list/List';

interface FollowersListProps {
  followers: Follower[] | undefined;
}

const FollowersList: React.FC<FollowersListProps> = ({ followers }) => {
  const renderFollower = (follower: Follower) => (
    <Avatar
      variant='circular'
      title={`${follower?.login}'s Avatar`}
      alt={follower?.login}
      src={follower?.avatar_url}
    />
  );

  return <List data={followers} renderItem={renderFollower} developer={null} title='Followers' />;
};

export default FollowersList;
