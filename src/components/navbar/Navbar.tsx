import React from 'react';

import HomeLink from './home-link/HomeLink';
import NavbarIconContainer from '../navbar/navbar-icon-container/NavbarIconContainer';

/**
 * The navigation bar component.
 *
 * This component represents the navigation bar at the top of the page. It includes
 * links to the home page and GitHub icons. The navigation bar is fixed at the top
 * of the viewport.
 *
 * @component
 * @example
 * ```tsx
 * <Navbar />
 * ```
 */
const Navbar: React.FC = () => {
  return (
    <nav className='flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 mb-8'>
      <NavbarIconContainer />
      <div className='flex items-center space-x-5'>
        <HomeLink />
      </div>
    </nav>
  );
};

export default Navbar;
