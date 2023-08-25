import React from 'react';
import { render } from '@testing-library/react';
import Org from './Org'; // Import the Org interface

describe('Org interface', () => {
  it('should have the required properties', () => {
    const org: Org = {
      avatar_url: 'https://example.com/org-avatar.png',
      description: 'An organization on GitHub',
      events_url: 'https://api.github.com/orgs/example/events',
      hooks_url: 'https://api.github.com/orgs/example/hooks',
      id: 456,
      issues_url: 'https://api.github.com/orgs/example/issues',
      login: 'example',
      members_url: 'https://api.github.com/orgs/example/members{/member}',
      node_id: 'xyz789',
      public_members_url: 'https://api.github.com/orgs/example/public_members{/member}',
      repos_url: 'https://api.github.com/orgs/example/repos',
      url: 'https://api.github.com/orgs/example'
    };

    expect(org.avatar_url).toBeDefined();
    expect(org.description).toBeDefined();
    expect(org.events_url).toBeDefined();
    expect(org.hooks_url).toBeDefined();
    expect(org.id).toBeDefined();
    expect(org.issues_url).toBeDefined();
    expect(org.login).toBeDefined();
    expect(org.members_url).toBeDefined();
    expect(org.node_id).toBeDefined();
    expect(org.public_members_url).toBeDefined();
    expect(org.repos_url).toBeDefined();
    expect(org.url).toBeDefined();
  });
});
