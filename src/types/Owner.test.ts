import React from 'react';
import { render } from '@testing-library/react';
import Owner from './Owner'; // Import the Owner interface

describe('Owner interface', () => {
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

    expect(owner.login).toBeDefined();
    expect(owner.id).toBeDefined();
    expect(owner.node_id).toBeDefined();
    expect(owner.avatar_url).toBeDefined();
    expect(owner.url).toBeDefined();
    expect(owner.repos_url).toBeDefined();
    expect(owner.events_url).toBeDefined();
  });
});
