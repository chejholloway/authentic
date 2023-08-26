import { render } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import Org from "../../types/Org";
import Developer from "../../types/Developer";
import Repo from '../../types/Repo';
import OrgsList from "./OrgsList";

jest.mock("react-router-dom");
jest.mock("@material-tailwind/react");
jest.mock("../../types/Org");
jest.mock('../../types/Repo');
jest.mock("../../types/Developer");

const mockOrgs: Org[] = [
  {
    "avatar_url": "https://avatars.githubusercontent.com/u/28929274?v=4",
    "description": "Plataforma de educação em tecnologia 🚀",
    "events_url": "https://api.github.com/users/charlenopires/events{/privacy}",
    "hooks_url": "https://api.github.com/orgs/Rocketseat/hooks",
    "id": 28929273,
    "issues_url": "https://api.github.com/orgs/Rocketseat/issues",
    "login": "Rocketseat",
    "members_url": "https://api.github.com/orgs/Rocketseat/members{/member}",
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjI4OTI5Mjc0",
    "public_members_url": "https://api.github.com/orgs/Rocketseat/public_members{/member}",
    "repos_url": "https://api.github.com/orgs/Rocketseat/repos",
    "url": "https://api.github.com/orgs/Rocketseat",
  },
  {
    "avatar_url": "https://avatars.githubusercontent.com/u/28929274?v=4",
    "description": "Plataforma de educação em tecnologia 🚀",
    "events_url": "https://api.github.com/users/charlenopires/events{/privacy}",
    "hooks_url": "https://api.github.com/orgs/Rocketseat/hooks",
    "id": 28929274,
    "issues_url": "https://api.github.com/orgs/Rocketseat/issues",
    "login": "Rocketseat",
    "members_url": "https://api.github.com/orgs/Rocketseat/members{/member}",
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjI4OTI5Mjc0",
    "public_members_url": "https://api.github.com/orgs/Rocketseat/public_members{/member}",
    "repos_url": "https://api.github.com/orgs/Rocketseat/repos",
    "url": "https://api.github.com/orgs/Rocketseat",
  },
];

const mockDeveloper: Developer = {
  "login": "ruanyf",
  "avatar_url": "https://api.github.com/users/ruanyf/starred{/owner}{/repo}",
};

describe('<OrgsList>', () => {
  it('should render component', () => {
    const { container } = render(
      <OrgsList developer={mockDeveloper} orgs={mockOrgs}/>
    );

    expect(container).toMatchSnapshot();
  });
});
