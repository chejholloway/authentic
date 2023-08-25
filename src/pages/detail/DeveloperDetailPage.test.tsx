import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import {
  useGetDeveloperDetailsQuery,
  useGetDeveloperReposQuery,
  useGetDeveloperOrgsQuery,
  useGetDeveloperFollowersQuery,
} from '../../services/github';
import DeveloperDetailPage from './DeveloperDetailPage';
import Navbar from '../../components/navbar/Navbar';
import ReposList from '../../components/repos-list/ReposList';
import OrgsList from '../../components/orgs-list/OrgsList';
import FollowersList from '../../components/followers-list/FollowersList';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('../../services/github', () => ({
  useGetDeveloperDetailsQuery: jest.fn(),
  useGetDeveloperReposQuery: jest.fn(),
  useGetDeveloperOrgsQuery: jest.fn(),
  useGetDeveloperFollowersQuery: jest.fn(),
}));

jest.mock('../../components/navbar/Navbar', () => ({
  __esModule: true,
  default: () => <div>Mocked Navbar</div>,
}));

jest.mock('../../components/repos-list/ReposList', () => ({
  __esModule: true,
  default: () => <div>Mocked ReposList</div>,
}));

jest.mock('../../components/orgs-list/OrgsList', () => ({
  __esModule: true,
  default: () => <div>Mocked OrgsList</div>,
}));

jest.mock('../../components/followers-list/FollowersList', () => ({
  __esModule: true,
  default: () => <div>Mocked FollowersList</div>,
}));

describe('<DeveloperDetailPage>', () => {
  const mockUsername = 'testuser';

  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ username: mockUsername });
  });

  it('renders developer detail page with loading state', async () => {
    (useGetDeveloperDetailsQuery as jest.Mock).mockReturnValue({
      data: undefined,
    });
    (useGetDeveloperReposQuery as jest.Mock).mockReturnValue({
      data: undefined,
    });
    (useGetDeveloperOrgsQuery as jest.Mock).mockReturnValue({
      data: undefined,
    });
    (useGetDeveloperFollowersQuery as jest.Mock).mockReturnValue({
      data: undefined,
    });

    const { getByText } = render(<DeveloperDetailPage />);

    await waitFor(() => {
      expect(getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('renders developer detail page with data', async () => {
    (useGetDeveloperDetailsQuery as jest.Mock).mockReturnValue({
      data: { id: 1, login: mockUsername },
    });
    (useGetDeveloperReposQuery as jest.Mock).mockReturnValue({
      data: [{ id: 1, name: 'repo1' }],
    });
    (useGetDeveloperOrgsQuery as jest.Mock).mockReturnValue({
      data: [{ id: 1, login: 'org1' }],
    });
    (useGetDeveloperFollowersQuery as jest.Mock).mockReturnValue({
      data: [{ id: 1, login: 'follower1' }],
    });

    const { getByText } = render(<DeveloperDetailPage />);

    await waitFor(() => {
      expect(getByText('Mocked Navbar')).toBeInTheDocument();
      expect(getByText('Mocked ReposList')).toBeInTheDocument();
      expect(getByText('Mocked OrgsList')).toBeInTheDocument();
      expect(getByText('Mocked FollowersList')).toBeInTheDocument();
    });
  });
});
