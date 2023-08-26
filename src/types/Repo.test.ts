import React from 'react';
import { render } from '@testing-library/react';
import Repo from './Repo'; // Import the Repo interface
import Owner from './Owner'; // Import the Owner interface

describe('Repo interface', () => {
  it('should have the required properties', () => {
    const owner: Owner = {
      avatar_url: 'https://example.com/owner-avatar.png',
      events_url: 'https://api.github.com/users/example/events{/privacy}',
      id: 123,
      login: 'example',
      node_id: 'abc456',
      repos_url: 'https://api.github.com/users/example/repos',
      url: 'https://api.github.com/users/example',
    };

    const repo: Repo = {
      id: 456,
      node_id: 'def789',
      name: 'example-repo',
      full_name: 'example/example-repo',
      private: false
    };

    expect(repo.id).toBeDefined();
    expect(repo.node_id).toBeDefined();
    expect(repo.name).toBeDefined();
    expect(repo.full_name).toBeDefined();
    expect(repo.private).toBeDefined();
  });
});
