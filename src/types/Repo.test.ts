import React from 'react';
import { render } from '@testing-library/react';
import Repo from './Repo'; // Import the Repo interface
import Owner from './Owner'; // Import the Owner interface

describe('Repo interface', () => {
  it('should have the required properties', () => {
    const owner: Owner = {
      login: 'example',
      id: 123,
      node_id: 'abc456',
      avatar_url: 'https://example.com/owner-avatar.png',
      gravatar_id: 'gravatar123',
      url: 'https://api.github.com/users/example',
      html_url: 'https://github.com/example',
      followers_url: 'https://api.github.com/users/example/followers',
      following_url: 'https://api.github.com/users/example/following{/other_user}',
      gists_url: 'https://api.github.com/users/example/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/example/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/example/subscriptions',
      organizations_url: 'https://api.github.com/users/example/orgs',
      repos_url: 'https://api.github.com/users/example/repos',
      events_url: 'https://api.github.com/users/example/events{/privacy}',
      received_events_url: 'https://api.github.com/users/example/received_events',
      type: 'User',
      site_admin: false
    };

    const repo: Repo = {
      id: 456,
      node_id: 'def789',
      name: 'example-repo',
      full_name: 'example/example-repo',
      private: false,
      owner: owner
    };

    expect(repo.id).toBeDefined();
    expect(repo.node_id).toBeDefined();
    expect(repo.name).toBeDefined();
    expect(repo.full_name).toBeDefined();
    expect(repo.private).toBeDefined();
    expect(repo.owner).toBeDefined();
  });
});
