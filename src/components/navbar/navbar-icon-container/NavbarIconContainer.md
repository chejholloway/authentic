# NavbarIconContainer Component

Container component for rendering GitHub icons in the navbar.

This component serves as a container for rendering the GitHub icons (GitHub logo and Octocat)
in the navbar. It provides a link to the home page using `react-router-dom`.

## Component Details

- **Type:** React Functional Component
- **Props:**

  None

## Usage Example

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from '../../icons/GithubIcon';
import OctocatIcon from '../../icons/OctocatIcon';

const NavbarIconContainer: React.FC = () => {
  return (
    <div className='flex items-center'>
      <Link to='/' className='cursor-pointer'>
        <div className='flex justify-center'>
          <GithubIcon />
          <OctocatIcon />
        </div>
      </Link>
    </div>
  );
};

export default NavbarIconContainer;
