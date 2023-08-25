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
import Repo from "../../types/Repo";
import Developer from "../../types/Developer";
import ReposList from "./ReposList";

jest.mock("react-router-dom");
jest.mock("@material-tailwind/react");
jest.mock("../../types/Repo");
jest.mock("../../types/Developer");

describe('<ReposList>', () => {
  it('should render component', () => {
    const { container } = render(
      <ReposList developer={undefined} repos={undefined} />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render component with props', () => {
    const mockDeveloper: Developer = {
      "login": "ruanyf",
      "avatar_url": "https://avatars.githubusercontent.com/u/905434?v=4",
    };

    const mockRepos: Repo[] = [
      {
        "full_name": "diego3g/05-design-system",
        "id": 2254734,
        "name": "05-design-system",
        "node_id": "MDQ6VXNlcjIyNTQ3MzE=",
        "private": false,
      },
      {
        "full_name": "diego3g/05-design-system",
        "id": 2254731,
        "name": "05-design-system",
        "node_id": "MDQ6VXNlcjIyNTQ3MzE=",
        "private": false
    }];

    const { container } = render(
      <ReposList developer={mockDeveloper} repos={mockRepos} />
    );

    expect(container).toMatchSnapshot();
  });
});
