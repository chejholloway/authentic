import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Avatar, Typography } from '@material-tailwind/react';
import FollowersList from './FollowersList';
import Follower from '../../types/Follower';

jest.mock('@material-tailwind/react', () => ({
  Avatar: ({ alt }: { alt: string }) => <img alt={alt} />,
  Typography: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
  Link: ({ children }: { children: React.ReactNode }) => <a>{children}</a>,
}));

describe('<FollowersList>', () => {
  test('renders followers list with data', () => {
    const mockFollowers: Follower[] = [
    {
      "login": "follower1",
      "id": 851,
      "node_id": "MDQ6VXNlcjg1MQ==",
      "avatar_url": "https://avatars.githubusercontent.com/u/851?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mountain",
      "html_url": "https://github.com/mountain",
      "followers_url": "https://api.github.com/users/mountain/followers",
      "following_url": "https://api.github.com/users/mountain/following{/other_user}",
      "gists_url": "https://api.github.com/users/mountain/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mountain/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mountain/subscriptions",
      "organizations_url": "https://api.github.com/users/mountain/orgs",
      "repos_url": "https://api.github.com/users/mountain/repos",
      "events_url": "https://api.github.com/users/mountain/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mountain/received_events",
      "type": "User",
      "site_admin": false
    },
    {
      "login": "follower2",
      "id": 1014,
      "node_id": "MDQ6VXNlcjEwMTQ=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1014?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sunfmin",
      "html_url": "https://github.com/sunfmin",
      "followers_url": "https://api.github.com/users/sunfmin/followers",
      "following_url": "https://api.github.com/users/sunfmin/following{/other_user}",
      "gists_url": "https://api.github.com/users/sunfmin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sunfmin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sunfmin/subscriptions",
      "organizations_url": "https://api.github.com/users/sunfmin/orgs",
      "repos_url": "https://api.github.com/users/sunfmin/repos",
      "events_url": "https://api.github.com/users/sunfmin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sunfmin/received_events",
      "type": "User",
      "site_admin": false
    },
  ];

    const { asFragment } = render(
      <Router>
        <FollowersList followers={mockFollowers} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders "No followers available." when followers are undefined', () => {
    const { asFragment } = render(
      <Router>
        <FollowersList followers={undefined} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
