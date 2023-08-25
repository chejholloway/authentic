import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders a link to the home page.
 *
 * This component provides a link to the home page using `react-router-dom`. You
 * can customize the link text and styling using the appropriate props.
 *
 * @component
 * @example
 * ```tsx
 * <HomeLink />
 * ```
 */
const HomeLink: React.FC = () => {
  return (
    <div className='flex items-center space-x-5'>
      <Link to='/' className='text-black mr-4 hover:text-gray-400 transition duration-300'>
        Home
      </Link>
    </div>
  );
};

export default HomeLink;
