import React from 'react';
import { Avatar } from '@material-tailwind/react';
import Repo from '../../types/Repo';
import Developer from '../../types/Developer';
import List from '../list/List';

interface ReposListProps {
  developer: Developer | undefined;
  repos: Repo[] | undefined;
}

const ReposList: React.FC<ReposListProps> = ({ developer, repos }) => {
  const renderRepo = (repo: Repo, developer: Developer | undefined) => (
    <Avatar variant='circular' alt={developer?.name} src={developer?.avatar_url} />
  );

  return <List data={repos} renderItem={renderRepo} developer={developer} title='Repositories' />;
};

export default ReposList;
