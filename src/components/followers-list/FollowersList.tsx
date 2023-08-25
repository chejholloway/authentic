import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from '@material-tailwind/react';

import Follower from '../../types/Follower';

/**
 * Renders a list of followers with their avatars.
 *
 * This component takes an array of `Follower` objects as a prop and renders
 * a list of avatars with links to their profiles.
 *
 * @component
 * @example
 * ```tsx
 * const followers: Follower[] = [
 *   {
 *     id: 1,
 *     login: "exampleUser",
 *     avatar_url: "https://example.com/avatar.jpg"
 *   },
 *   // ...more followers
 * ];
 *
 * <FollowersList followers={followers} />
 * ```
 *
 * @param {object} props - The component props.
 * @param {Follower[]} props.followers - An array of `Follower` objects representing followers.
 */
interface FollowersListProps {
  followers: Follower[] | undefined;
}

const FollowersList: React.FC<FollowersListProps> = ({ followers }) => {
  return (
    <div className='text-gray-700'>
      <h3 className='text-center'>
        <Typography className='font-normal'>Followers</Typography>
      </h3>
      <div className='flex flex-wrap space-x-4'>
        {followers ? (
          followers.map((follower) => (
            <div key={follower.id}>
              <Link to={'/'}>
                <Avatar
                  variant='circular'
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
