import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemPrefix, Avatar, Card, Typography } from '@material-tailwind/react';

import Navbar from '../../components/navbar/Navbar';
import Developer from '../../types/Developer';
import { useGetTopDevelopersQuery } from '../../services/github';

/**
 * Page component displaying a list of top GitHub developers.
 *
 * This component fetches and displays a list of top GitHub developers. It uses the
 * `useGetTopDevelopersQuery` from the GitHub service to fetch data. The UI organizes
 * developers in a grid, with their avatars and usernames displayed.
 *
 * @component
 * @example
 * ```tsx
 * <HomePage />
 * ```
 */

const HomePage: React.FC = () => {
  const { data: developers } = useGetTopDevelopersQuery({
    limit: 20
  });

  if (!developers) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className='container mx-auto p-4'>
        <div className='flex items-center justify-center min-h-screen py-8'>
          <div className='bg-white mt-8 p-8 shadow-lg transform translate-y-20 animate-slide-in'>
            <h1 className='text-center'>Top Github Developers</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {developers?.items.map((developer: Developer) => (
                <div key={developer.login}>
                  <Link to={`/developer/${developer.login}`}>
                    <Card className='w-full'>
                      <List>
                        <ListItem>
                          <ListItemPrefix>
                            <Avatar
                              variant='circular'
                              alt={developer.login}
                              src={developer.avatar_url}
                            />
                          </ListItemPrefix>
                          <Typography variant='small' color='gray' className='font-normal'>
                            {developer.login}
                          </Typography>
                        </ListItem>
                      </List>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
