import React from 'react';
import { Avatar } from '@material-tailwind/react';
import Org from '../../types/Org';
import Developer from '../../types/Developer';
import List from '../list/List';

interface OrgsListProps {
  developer: Developer | undefined;
  orgs: Org[] | undefined;
}

const OrgsList: React.FC<OrgsListProps> = ({ developer, orgs }) => {
  const renderOrg = (org: Org, developer: Developer | undefined) => (
    <Avatar variant='circular' alt={developer?.login} src={developer?.avatar_url} />
  );

  return <List data={orgs} renderItem={renderOrg} developer={developer} title='Organization' />;
};

export default OrgsList;
