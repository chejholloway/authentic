import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from '@material-tailwind/react';
import ReposList from './ReposList';
import Repo from '../../types/Repo';
import Developer from '../../types/Developer';

jest.mock('@material-tailwind/react', () => ({
  Avatar: ({ alt }: { alt: string }) => <img alt={alt} />,
  Typography: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
  List: ({ children }: { children: React.ReactNode }) => <ul>{children}</ul>,
  ListItem: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
  ListItemPrefix: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Card: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Link: ({ children }: { children: React.ReactNode }) => <a>{children}</a>,
}));

describe('<ReposList>', () => {
  test('renders repositories list with data', () => {
    const mockRepos: Repo[] = [
      {
        id: 1,
        name: 'repo1',
      },
      {
        id: 2,
        name: 'repo2',
      },
    ];

    const mockDeveloper: Developer = {
      id: 1,
      login: 'developer1',
      avatar_url: 'developer1-avatar-url',
    };

    const { asFragment } = render(
      <Router>
        <ReposList developer={mockDeveloper} repos={mockRepos} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders "No repositories available." when repos are undefined', () => {
    const mockDeveloper: Developer = {
      id: 1,
      login: 'developer1',
      avatar_url: 'developer1-avatar-url',
    };

    const { asFragment } = render(
      <Router>
        <ReposList developer={mockDeveloper} repos={undefined} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
