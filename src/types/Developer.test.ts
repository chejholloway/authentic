import React from 'react';
import { render } from '@testing-library/react';
import Developer from './Developer'; // Import the Developer interface

describe('Developer interface', () => {
  it('should have the required properties', () => {
    const developer: Developer = {
      avatar_url: 'https://example.com/avatar.png',
      login: 'testUser',
      repos_url: 'https://api.github.com/users/example/repos',
    };

    expect(developer.avatar_url).toBeDefined();
    expect(developer.login).toBeDefined();
  });
});
