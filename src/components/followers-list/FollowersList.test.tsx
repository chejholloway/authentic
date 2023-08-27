import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";

import FollowersList from "./FollowersList";

// Mock react-router-dom and @material-tailwind/react components
jest.mock("react-router-dom", () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock("@material-tailwind/react", () => ({
  Avatar: () => null,
  Typography: () => null,
}));

// Mock the Follower type
jest.mock("../../types/Follower");

const mockFollowers = [
  {
    login: "mountain",
    id: 851,
    node_id: "MDQ6VXNlcjg1MQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/851?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mountain",
    html_url: "https://github.com/mountain",
    followers_url: "https://api.github.com/users/mountain/followers",
    following_url:
      "https://api.github.com/users/mountain/following{/other_user}",
    gists_url: "https://api.github.com/users/mountain/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mountain/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mountain/subscriptions",
    organizations_url: "https://api.github.com/users/mountain/orgs",
    repos_url: "https://api.github.com/users/mountain/repos",
    events_url: "https://api.github.com/users/mountain/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/mountain/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "sunfmin",
    id: 1014,
    node_id: "MDQ6VXNlcjEwMTQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/1014?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/sunfmin",
    html_url: "https://github.com/sunfmin",
    followers_url: "https://api.github.com/users/sunfmin/followers",
    following_url:
      "https://api.github.com/users/sunfmin/following{/other_user}",
    gists_url: "https://api.github.com/users/sunfmin/gists{/gist_id}",
    starred_url: "https://api.github.com/users/sunfmin/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/sunfmin/subscriptions",
    organizations_url: "https://api.github.com/users/sunfmin/orgs",
    repos_url: "https://api.github.com/users/sunfmin/repos",
    events_url: "https://api.github.com/users/sunfmin/events{/privacy}",
    received_events_url: "https://api.github.com/users/sunfmin/received_events",
    type: "User",
    site_admin: false,
  },
];

describe("<FollowersList>", () => {
  it("should render component", () => {
    const { asFragment } = render(<FollowersList followers={mockFollowers} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render component with props", () => {
    const { asFragment } = render(<FollowersList followers={mockFollowers} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
